const modal = document.querySelector('#modal');
const title = document.querySelector('#modal-title');
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  title.textContent = `Acheter : ${button.dataset.product}`;
  modal.showModal();
}));
document.querySelectorAll('.close, .close-modal').forEach(button => button.addEventListener('click', () => modal.close()));
document.querySelectorAll('[data-amount]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-amount]').forEach(item => item.classList.remove('selected'));
  button.classList.add('selected');
  document.querySelector('#custom-amount').value = button.dataset.amount;
}));
document.querySelector('#donation-form').addEventListener('submit', event => {
  event.preventDefault();
  const amount = document.querySelector('#custom-amount').value;
  title.textContent = amount ? `Soutenir avec ${amount} €` : 'Choisis un montant';
  modal.showModal();
});
