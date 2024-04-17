const logSubmit = (event) => {
  console.log('The form was submitted.');
  event.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;

  if (firstName.trim() && lastName.trim() && email.includes('@')) {
    const signatureList = document.getElementById('signatures');
    const newSignature = document.createElement('li');
    newSignature.textContent = `${firstName} ${lastName}`;
    signatureList.appendChild(newSignature);

    const signatureCount = document.getElementById('signature-count');
    signatureCount.textContent = signatureList.childElementCount;
  } else {
    if (!email.includes('@')) {
      document.getElementById('email').style.borderColor = 'red';
    }
  }
};

const form = document.getElementById('petition-form');

form.addEventListener('submit', logSubmit);