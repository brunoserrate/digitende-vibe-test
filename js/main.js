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
  
  form.addEventListener('submit', async function(e) {
    if (!validateForm(form)) {
      e.preventDefault();
      return false;
    }

    e.preventDefault();

    const formData = new FormData(form);
    const submitButton = form.querySelector('.btn-submit');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    try {
      const response = await fetch('php/send-email.php', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        const successMessage = document.createElement('div');
        successMessage.className = 'form-message success';
        successMessage.style.color = '#22c55e';
        successMessage.style.padding = '1rem';
        successMessage.style.borderRadius = '0.5rem';
        successMessage.style.marginTop = '1rem';
        successMessage.style.backgroundColor = '#dcfce7';
        successMessage.textContent = data.message;

        form.appendChild(successMessage);
        form.reset();
        form.querySelectorAll('input, textarea').forEach(input => {
          input.classList.remove('success', 'error');
        });

        setTimeout(() => {
          successMessage.remove();
        }, 5000);

      } else {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'form-message error';
        errorMessage.style.color = '#ef4444';
        errorMessage.style.padding = '1rem';
        errorMessage.style.borderRadius = '0.5rem';
        errorMessage.style.marginTop = '1rem';
        errorMessage.style.backgroundColor = '#fee2e2';
        errorMessage.textContent = data.message;

        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
          existingMessage.remove();
        }

        form.appendChild(errorMessage);

        setTimeout(() => {
          errorMessage.remove();
        }, 5000);
      }
    } catch (error) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'form-message error';
      errorMessage.style.color = '#ef4444';
      errorMessage.style.padding = '1rem';
      errorMessage.style.borderRadius = '0.5rem';
      errorMessage.style.marginTop = '1rem';
      errorMessage.style.backgroundColor = '#fee2e2';
      errorMessage.textContent = 'Erro de conexão. Verifique sua internet e tente novamente.';

      const existingMessage = form.querySelector('.form-message');
      if (existingMessage) {
        existingMessage.remove();
      }

      form.appendChild(errorMessage);

      setTimeout(() => {
        errorMessage.remove();
      }, 5000);
    }

    submitButton.disabled = false;
    submitButton.textContent = originalText;
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });
  
  const revealElements = document.querySelectorAll('h2, .benefit-card, .testimonial-card, .btn');
  
  revealElements.forEach(element => {
    element.classList.add('reveal');
  });
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
  
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});