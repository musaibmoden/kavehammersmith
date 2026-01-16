const SPREADSHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID || '';

// Helper function to fetch sheet data using Google Sheets CSV export
async function fetchSheetData(sheetName: string) {
  try {
    // Use Google Sheets visualization API to get CSV data
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Failed to fetch sheet ${sheetName}:`, response.statusText);
      return [];
    }
    
    const csvText = await response.text();
    
    // Parse CSV manually
    const lines = csvText.trim().split('\n');
    const result = lines.map(line => {
      // Simple CSV parser that handles quoted values
      const matches = line.match(/("([^"]*)"|[^,]+)/g) || [];
      return matches.map((m: string) => m.replace(/^"(.*)"$/, '$1').trim());
    });
    
    return result;
  } catch (error) {
    console.error(`Error fetching sheet ${sheetName}:`, error);
    return [];
  }
}

export async function getMenuItems() {
  try {
    const rows = await fetchSheetData('Menu');
    
    if (rows.length < 2) {
      console.warn('No menu data found in sheet');
      return [];
    }

    // Get headers from first row
    const headers = rows[0];
    
    // Map data rows to objects using headers
    return rows.slice(1).map((row: string[]) => {
      const nameIdx = headers.indexOf('name');
      const descIdx = headers.indexOf('description');
      const priceIdx = headers.indexOf('price');
      const categoryIdx = headers.indexOf('category');
      const imageIdx = headers.indexOf('image');

      const price = row[priceIdx] || '';
      const formattedPrice = price.includes('£') ? price : `£${price}`;

      return {
        name: row[nameIdx] || '',
        description: row[descIdx] || '',
        price: formattedPrice,
        category: row[categoryIdx] || '',
        image: row[imageIdx] || '/kave menu.jpeg',
      };
    }).filter((item: any) => item.name); // Filter out empty rows
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
}

export async function getHours() {
  try {
    const rows = await fetchSheetData('Hours');
    
    if (rows.length < 2) {
      console.warn('No hours data found in sheet');
      return null;
    }

    const headers = rows[0];
    const openIdx = headers.indexOf('open');
    const closeIdx = headers.indexOf('close');

    if (rows.length >= 3) {
      return {
        weekdayOpen: rows[1][openIdx] || '7:00 AM',
        weekdayClose: rows[1][closeIdx] || '6:00 PM',
        weekendOpen: rows[2][openIdx] || '8:00 AM',
        weekendClose: rows[2][closeIdx] || '7:00 PM',
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching hours:', error);
    return null;
  }
}

export async function getContactInfo() {
  try {
    const rows = await fetchSheetData('Contact');
    
    if (rows.length < 2) {
      console.warn('No contact data found in sheet');
      return null;
    }

    const headers = rows[0];
    const emailIdx = headers.indexOf('email');
    const phoneIdx = headers.indexOf('phone');
    const addressIdx = headers.indexOf('address');
    const instagramIdx = headers.indexOf('instagram');

    const contactRow = rows[1];

    return {
      email: contactRow[emailIdx] || 'hello@kave.co.uk',
      phone: contactRow[phoneIdx] || '',
      address: contactRow[addressIdx] || 'Hammersmith, London',
      instagram: contactRow[instagramIdx] || 'https://instagram.com/kave',
    };
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
}

export async function getSignatureItems() {
  try {
    const rows = await fetchSheetData('SignatureItem');
    
    if (rows.length < 2) {
      console.warn('No signature items data found in sheet');
      return [];
    }

    const headers = rows[0];
    
    return rows.slice(1).map((row: string[]) => {
      const nameIdx = headers.indexOf('name');
      const descIdx = headers.indexOf('description');
      const priceIdx = headers.indexOf('price');
      const categoryIdx = headers.indexOf('category');
      const imageIdx = headers.indexOf('image');

      const price = row[priceIdx] || '';
      const formattedPrice = price.includes('£') ? price : `£${price}`;

      return {
        name: row[nameIdx] || '',
        description: row[descIdx] || '',
        price: formattedPrice,
        category: row[categoryIdx] || '',
        image: row[imageIdx] || '/kave menu.jpeg',
      };
    }).filter((item: any) => item.name);
  } catch (error) {
    console.error('Error fetching signature items:', error);
    return [];
  }
}

