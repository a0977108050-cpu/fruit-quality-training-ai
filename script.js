document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.option');
  const feedback = document.querySelector('.feedback');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.style.background = '#f1f1f1';
        b.style.borderColor = 'rgba(0,0,0,0.08)';
      });

      btn.style.background = '#edf8ee';
      btn.style.borderColor = '#2f7d32';

      const value = btn.textContent.trim();

      if (value === '報廢') {
        feedback.textContent = '正確！若出現明顯受損、腐爛或異味，應判定為報廢，避免流入市場造成損失。';
        feedback.style.background = '#fbe9e7';
        feedback.style.color = '#7d2f2f';
        feedback.style.borderColor = 'rgba(214,92,74,0.18)';
      } else if (value === '輕微瑕疵') {
        feedback.textContent = '接近正確。這類狀況可能需要折價處理，但如果已經腐爛或異味明顯，應提升為報廢等級。';
        feedback.style.background = '#fff5d8';
        feedback.style.color = '#6b4d12';
        feedback.style.borderColor = 'rgba(241,200,103,0.22)';
      } else {
        feedback.textContent = '正確！優質水果通常外觀完整、色澤正常，適合正常販售。';
        feedback.style.background = '#edf8ee';
        feedback.style.color = '#234d2b';
        feedback.style.borderColor = 'rgba(47,125,50,0.15)';
      }
    });
  });

  document.querySelector('.primary').addEventListener('click', () => {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.secondary').addEventListener('click', () => {
    document.getElementById('cases').scrollIntoView({ behavior: 'smooth' });
  });
});
