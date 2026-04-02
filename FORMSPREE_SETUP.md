# 📩 Formspree Setup Guide

Connect your "CA. Shailendra Agarwal" contact form to Formspree to receive inquiries directly in your email.

### Step 1: Create an Account
1. Go to [Formspree.io](https://formspree.io/register) and create a free account.
2. Confirm your email address.

### Step 2: Create a New Form
1. In your Formspree dashboard, click **"+ New Form"**.
2. Name it: **"CA. Shailendra Agarwal Website"**.
3. Set the "Send emails to" address to wherever you want to receive inquiries (e.g., `office@cashailendra.com`).
4. Click **"Create Form"**.

### Step 3: Get your Form ID
1. Once the form is created, look for the **"Endpoint"** URL. 
   - It will look like: `https://formspree.io/f/xojkwwoj`
2. Copy the **last part** (the ID). In this example, it's `xojkwwoj`.

### Step 4: Add to your Website
I have updated your code in **`src/pages/Contact.tsx`**.
1. Open the file: [Contact.tsx](file:///Users/raaghav/Documents/Portfolio/Shailendra-Profile/src/pages/Contact.tsx)
2. Look for the line: `const FORMSPREE_ID = 'xojkwwoj';`
3. Replace `'xojkwwoj'` with your **own ID** from Step 3.
4. Save the file.

### Step 5: Test
1. Go to your live website's [Contact Page](https://cashailendra.vercel.app/contact).
2. Fill out the form and click **"Send Message"**.
3. Check your email! You should receive the inquiry instantly.

---
*Note: The Free plan allows for 50 submissions per month. You can always check all messages in your Formspree dashboard.*
