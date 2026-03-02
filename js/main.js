function validateNome(nome) {
  if (!nome || nome.trim() === '') {
    return { valid: false, message: 'O nome é obrigatório' };
  }
  if (nome.trim().length < 3) {
    return { valid: false, message: 'O nome deve ter pelo menos 3 caracteres' };
  }
  return { valid: true };
}

function validateEmail(email) {
  if (!email || email.trim() === '') {
    return { valid: false, message: 'O email é obrigatório' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { valid: false, message: 'Por favor, insira um email válido' };
  }
  return { valid: true };
}

function validateTelefone(telefone) {
  if (!telefone || telefone.trim() === '') {
    return { valid: true };
  }
  const telefoneLimpo = telefone.replace(/\D/g, '');
  if (telefoneLimpo.length < 10 || telefoneLimpo.length > 11) {
    return { valid: false, message: 'Por favor, insira um telefone válido' };
  }
  return { valid: true };
}

function validateMensagem(mensagem) {
  if (!mensagem || mensagem.trim() === '') {
    return { valid: false, message: 'A mensagem é obrigatória' };
  }
  if (mensagem.trim().length < 10) {
    return { valid: false, message: 'A mensagem deve ter pelo menos 10 caracteres' };
  }
  return { valid: true };
}

function showError(input, message) {
  const formGroup = input.closest('.form-group');
  const existingError = formGroup.querySelector('.error-message');
  
  if (existingError) {
    existingError.remove();
  }
  
  input.classList.add('error');
  input.classList.remove('success');
  
  const errorElement = document.createElement('span');
  errorElement.className = 'error-message';
  errorElement.style.color = '#ef4444';
  errorElement.style.fontSize = '0.875rem';
  errorElement.style.marginTop = '0.25rem';
  errorElement.style.display = 'block';
  errorElement.textContent = message;
  
  formGroup.appendChild(errorElement);
}

function clearError(input) {
  const formGroup = input.closest('.form-group');
  const existingError = formGroup.querySelector('.error-message');
  
  if (existingError) {
    existingError.remove();
  }
  
  input.classList.remove('error');
  input.classList.add('success');
}

function validateField(input, validator) {
  const result = validator(input.value);
  
  if (!result.valid) {
    showError(input, result.message);
    return false;
  } else {
    clearError(input);
    return true;
  }
}

function validateForm(form) {
  const nome = form.querySelector('#nome');
  const email = form.querySelector('#email');
  const telefone = form.querySelector('#telefone');
  const mensagem = form.querySelector('#mensagem');
  
  let isValid = true;
  
  isValid = validateField(nome, validateNome) && isValid;
  isValid = validateField(email, validateEmail) && isValid;
  isValid = validateField(telefone, validateTelefone) && isValid;
  isValid = validateField(mensagem, validateMensagem) && isValid;
  
  return isValid;
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[action="php/send-email.php"]');
  
  if (!form) return;
  
  const nomeInput = form.querySelector('#nome');
  const emailInput = form.querySelector('#email');
  const telefoneInput = form.querySelector('#telefone');
  const mensagemInput = form.querySelector('#mensagem');
  
  nomeInput.addEventListener('input', () => validateField(nomeInput, validateNome));
  nomeInput.addEventListener('blur', () => validateField(nomeInput, validateNome));
  
  emailInput.addEventListener('input', () => validateField(emailInput, validateEmail));
  emailInput.addEventListener('blur', () => validateField(emailInput, validateEmail));
  
  telefoneInput.addEventListener('input', () => validateField(telefoneInput, validateTelefone));
  telefoneInput.addEventListener('blur', () => validateField(telefoneInput, validateTelefone));
  
  mensagemInput.addEventListener('input', () => validateField(mensagemInput, validateMensagem));
  mensagemInput.addEventListener('blur', () => validateField(mensagemInput, validateMensagem));
  
  form.addEventListener('submit', function(e) {
    if (!validateForm(form)) {
      e.preventDefault();
      return false;
    }
    return true;
  });
});