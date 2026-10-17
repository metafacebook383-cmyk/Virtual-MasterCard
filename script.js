// Countdown: 120, 119, ... 1, 0, then stops at 0.
const countdown = document.getElementById('countdown');
let secondsLeft = 120;
countdown.textContent = secondsLeft;
const timerId = setInterval(() => {
  if (secondsLeft > 0) {
    secondsLeft -= 1;
    countdown.textContent = secondsLeft;
  } else {
    clearInterval(timerId);
    countdown.textContent = '0';
  }
}, 1000);

const orderForm = document.getElementById('orderForm');
const formMessage = document.getElementById('formMessage');
orderForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const transactionId = document.getElementById('transactionId').value.trim();
  if (!fullName || !email || !phone || !transactionId) {
    formMessage.textContent = 'অনুগ্রহ করে সব ঘর পূরণ করুন।';
    return;
  }
  const message = [
    'Paycard Solution BD - অর্ডার', '',
    'নাম: ' + fullName,
    'জিমেইল: ' + email,
    'ফোন নম্বর: ' + phone,
    'অর্ডার মূল্য: ৯৯ টাকা',
    'পেমেন্ট মাধ্যম: বিকাশ / নগদ',
    'Transaction ID: ' + transactionId,
    '',
    'অর্ডার করার পর Card Access-এর জন্য ৫–১০ মিনিট অপেক্ষা করব।'
  ].join('\n');
  formMessage.textContent = 'WhatsApp খোলা হচ্ছে…';
  window.open('https://wa.me/8801824318448?text=' + encodeURIComponent(message), '_blank', 'noopener');
});
