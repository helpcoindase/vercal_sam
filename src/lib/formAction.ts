/**
 * Form Action Utility for Google Apps Script Web App & Lead Submission
 *
 * This module handles posting form leads to Google Apps Script Web App using the `doPost` method.
 * It stores leads in Google Sheets, triggers email notifications via Google Apps Script,
 * and handles redirection to the thank-you page upon successful submission.
 */

export interface LeadFormData {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  treatment?: string;
  message?: string;
  checkvalue?: string;
  website?: string;
  useragent?: string;
  starttime?: string;
  enquiry_date?: string;
  enquiry_month?: string;
  enquiry_time?: string;
  ipaddress?: string;
  [key: string]: any;
}

export interface FormSubmissionOptions {
  /** Google Apps Script Web App URL or Endpoint URL */
  appsScriptUrl?: string;
  /** Page URL to redirect to after successful submission */
  redirectUrl?: string;
}

/**
 * Default Google Apps Script Web App URL.
 * Set NEXT_PUBLIC_APPS_SCRIPT_URL in .env.local or update here.
 */
export const DEFAULT_APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyzCF56O9BN5U6V50-Xp8RVuqycAbbnG5lgQEMPXBZDIXGeaaQDwp5FtWo6rgixqSBWfg/exec";

/**
 * Submits lead data to Google Apps Script Web App via POST (`doPost`)
 * and redirects to the thank-you page on success.
 */
export async function submitLeadForm(
  data: LeadFormData,
  options: FormSubmissionOptions = {}
): Promise<{ success: boolean; message?: string }> {
  const {
    appsScriptUrl = DEFAULT_APPS_SCRIPT_URL,
    redirectUrl = "/thanks/",
  } = options;

  const targetUrl = appsScriptUrl || DEFAULT_APPS_SCRIPT_URL;

  const fullPayload: Record<string, any> = {
    mail_to: process.env.NEXT_PUBLIC_MAIL_TO || "leads.samwarthika@gmail.com",
    mail_cc: process.env.NEXT_PUBLIC_MAIL_CC || "techsupport@kay.org.in",
    ...data,
  };

  try {
    // Convert payload to FormData & URLSearchParams for maximum compatibility
    const formDataParams = new URLSearchParams();
    Object.keys(fullPayload).forEach((key) => {
      formDataParams.append(key, String(fullPayload[key] ?? ""));
    });

    let isSuccess = false;

    // First attempt: POST as JSON or URL-encoded form data
    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataParams.toString(),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          if (
            result.status === "success" ||
            result.result === "success" ||
            result.status === 200
          ) {
            isSuccess = true;
          } else if (result.status === "error") {
            return {
              success: false,
              message: result.message || "Form submission failed.",
            };
          }
        } else {
          // Plain text or standard success response
          isSuccess = true;
        }
      }
    } catch (corsError) {
      console.warn(
        "CORS or Direct Fetch restriction encountered. Retrying with no-cors mode...",
        corsError
      );

      // Fallback for Google Apps Script Web App (no-cors mode)
      // Passing URLSearchParams object directly ensures Content-Type is application/x-www-form-urlencoded in no-cors mode
      await fetch(targetUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataParams,
      });

      // In no-cors mode, successful completion implies lead sent to Apps Script
      isSuccess = true;
    }

    if (isSuccess) {
      if (typeof window !== "undefined") {
        window.location.href = redirectUrl;
      }
      return { success: true };
    }

    return {
      success: false,
      message: "Unable to complete form submission. Please try again.",
    };
  } catch (err: any) {
    console.error("Form action error:", err);
    return {
      success: false,
      message: err?.message || "Network error occurred.",
    };
  }
}
