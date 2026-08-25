/**
 * Newsletter service — backend-compatible integration.
 *
 * Uses the existing `api.js` axios instance to call the backend.
 * The API endpoint is configurable via the NEWSLETTER_ENDPOINT constant.
 *
 * When the backend is not yet available, set USE_MOCK = true to
 * simulate success. Flip it to false once the real API is deployed.
 */

import api from "./api";

/** Toggle this to false once the backend Newsletter API is live */
const USE_MOCK = true;

/** Backend endpoint for newsletter subscription */
const NEWSLETTER_ENDPOINT = "/newsletter/subscribe";

/**
 * Subscribe an email address to the newsletter.
 * @param {string} email - The email to subscribe.
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function subscribeNewsletter(email) {
  if (USE_MOCK) {
    // Mock: simulate network delay while backend is not ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Subscribed successfully! You'll receive updates at ${email}.`,
        });
      }, 1000);
    });
  }

  // Real API call — active once USE_MOCK is set to false
  try {
    const response = await api.post(NEWSLETTER_ENDPOINT, { email });
    return {
      success: true,
      message: response.data?.message || "Subscribed successfully!",
    };
  } catch (error) {
    const serverMessage =
      error.response?.data?.message || "Subscription failed. Please try again.";
    return {
      success: false,
      message: serverMessage,
    };
  }
}
