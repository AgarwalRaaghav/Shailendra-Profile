# Google Drive Gallery Sync: Setup Instructions

Follow these 3 simple steps to connect your Google Drive folder to your website gallery.

### Step 1: Prepare your Google Drive Folder
1. Create a folder in Google Drive.
2. Upload your photos to this folder.
3. Right-click the folder > **Share** > Change General access to **"Anyone with the link"** (Viewer).
4. Copy the **Folder ID** from the URL (it’s the long string after `folders/`).

### Step 2: Create the API Bridge
1. Go to [script.google.com](https://script.google.com).
2. Click **New Project**.
3. Delete the existing code and paste the code below:

```javascript
/**
 * Google Drive Image API Bridge
 * Returns a list of public download URLs for all images in a specific folder.
 */

const FOLDER_ID = '1qON0zdMUs97zClTPzXsPItHV7E_R6lU1';

function doGet() {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const files = folder.getFiles();
    const result = [];
    
    while (files.hasNext()) {
      const file = files.next();
      const mime = file.getMimeType();
      
      // Only include images (excluding HEIC which isn't web-supported)
      if (mime.startsWith('image/') && !mime.includes('heic') && !mime.includes('heif')) {
        // Use the direct download URL trick for Google Drive
        const url = 'https://lh3.googleusercontent.com/u/0/d/' + file.getId();
        result.push(url);
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({ error: e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy the Script
1. Click **Deploy** > **New Deployment**.
2. Select type: **Web App**.
3. Description: `Gallery API`.
4. Execute as: **Me**.
5. Who has access: **Anyone**.
6. Click **Deploy**.
7. Copy the **Web App URL** and provide it to me!

---
**Note**: Once you provide the Web App URL, I will connect it to your Gallery page instantly.
