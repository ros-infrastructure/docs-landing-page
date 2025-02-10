// Render ROS distributions
document.addEventListener('DOMContentLoaded', () => {
  const rosDistributionsDiv = document.querySelector('#distributions');
  renderDistributionsCards(rosDistributionsDiv, rosDistributions);
});

// Add ROS Index search capability
document.getElementById('search-index').onclick=function(){
  var value = document.getElementById('search').value;
  window.open('https://index.ros.org/?pkgs='+encodeURIComponent(value)+"&search_packages=true", '_blank')
}
