# SocialMediaLandingPage-JSOnly
Social media landing page only using javaScript
---

# **Social Media Landing Page**  

### **Table of Contents**  
- [Overview](#overview)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Setup Instructions](#setup-instructions)  
- [Usage](#usage)  
- [Customization](#customization)  
- [Screenshots](#screenshots)  
- [License](#license)  
- [Contact](#contact)  

---

## **Overview**  
This is a **responsive social media landing page** built using **JavaScript, HTML, and CSS**. It dynamically generates a profile card featuring user details, profile picture, and clickable links to various social media platforms.  

The page is designed to be lightweight and fully responsive, with smooth hover effects and customizable styles.  

---

## **Features**  
- **Dynamic Content Rendering**: User information and social links are populated from a JavaScript data object.  
- **Responsive Design**: Ensures compatibility across different devices and screen sizes.  
- **Interactive Social Icons**: Hover effects and clickable links open in new tabs.  
- **Dark Mode Toggle**: Easily switch between light and dark themes.  
- **Expandable Data Model**: Add new social platforms without modifying the core structure.  
- **Minimal Dependencies**: Uses only vanilla JavaScript—no external frameworks required.  

---

## **Technologies Used**  
- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **FontAwesome** (for icons)  

---

## **Setup Instructions**  

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/your-username/social-media-landing-page.git
   cd social-media-landing-page
   ```

2. **Open in Browser:**  
   - Open `index.html` directly in your browser, or  
   - Use a **live server** in Visual Studio Code for development:  
     ```bash
     npm install -g live-server
     live-server
     ```  

---

## **Usage**  
1. Replace the user data inside the `app.js` file:  
   ```javascript
   let data = {
     fullName: "Your Name",
     position: "Your Title",
     socials: [
       {
         id: "fb",
         service: "Facebook",
         url: "https://www.facebook.com/your-profile",
         icon: "fa-brands fa-facebook",
       },
       // Add more social links here
     ],
   };
   ```  

2. Update the profile image URL inside `app.js` or the JavaScript template.  

3. Customize the background image and colors in the dynamically embedded CSS section.  

---

## **Customization**  

### **Dark Mode Toggle (Optional)**  
Enable a dark mode button by uncommenting the **toggleDarkMode()** code in `app.js` or adding:  
```javascript
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};
```

### **Adding New Social Media Links**  
Add new platforms to the `data.socials` array:  
```javascript
{
  id: "yt",
  service: "YouTube",
  url: "https://www.youtube.com/channel/your-channel",
  icon: "fa-brands fa-youtube",
},
```

---

## **Screenshots**  

### **Default View**  
![Default View](screenshot-default.png)  

### **Dark Mode**  
![Dark Mode](screenshot-dark.png)  

---

## **License**  
This project is licensed under the **MIT License**.  

---

## **Contact**  
Created by **Deminicus McKinnon** (aka **Bownce Gawd**)  
- **Website**: [bowncegawd.com](https://www.bowncegawd.com)  
- **Email**: your-email@example.com  

---
