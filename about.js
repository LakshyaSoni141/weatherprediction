// Code for displaying information about the website and its team
function displayAboutUs() {
    const websiteName = 'Crop Disease and Weather Forecasting';
    const websiteDescription = 'Our website provides up-to-date information and resources related to plant diseases and weather forecasting.';
    const teamMembers = [
      { name: 'John Smith', role: 'Lead Researcher' },
      { name: 'Jane Doe', role: 'Web Developer' },
      { name: 'Bob Johnson', role: 'Content Writer' },
      { name: 'Sarah Lee', role: 'UX Designer' }
    ];
    
    // Display the website information and team members on the website
    document.getElementById('website-name').textContent = websiteName;
    document.getElementById('website-description').textContent = websiteDescription;
    
    const teamList = document.getElementById('team-list');
    teamMembers.forEach(member => {
      const listItem = document.createElement('li');
      listItem.textContent = `${member.name} - ${member.role}`;
      teamList.appendChild(listItem);
    });
  }
  
  // Call the displayAboutUs function to display the information on the website
  displayAboutUs();
  