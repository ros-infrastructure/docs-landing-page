// Render ROS distributions
document.addEventListener('DOMContentLoaded', () => {
  const rosDistributionsDiv = document.querySelector('#distributions');
  renderDistributionsCards(rosDistributionsDiv, rosDistributions);
});
