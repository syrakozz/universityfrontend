export const sidebarItems = [
  {
    id: 1,
    href: "/dashboard",
    iconClass: "text-20 icon-discovery",
    text: "Dashboard",
  },
  {
    id: 2,
    href: "/dshb-courses",
    iconClass: "text-20 icon-play-button",
    text: "Grade",
  },

  {
    id: 13,
    href: "/dshb-dictionary",
    text: "Major",
    iconClass: "text-20 icon-badge",
  },
  {
    id: 6,
    href: "/dshb-reviews",
    iconClass: "text-20 icon-comment",
    text: "Note",
  },
  {
    id: 7,
    href: "/dshb-settings",
    iconClass: "text-20 icon-setting",
    text: "Settings",
  },
  {
    id: 8,
    href: "/",
    iconClass: "text-20 icon-power",
    text: "Logout",
    onClick: () => {
      console.log("Logging out...");
    
      localStorage.removeItem("user");
      localStorage.removeItem("token");
  
      console.log("User and token removed from localStorage.");
  
     
      window.location.href = "/"; 
    }
  }
  
 
];