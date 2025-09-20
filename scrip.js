const text = "برنامه نویس.طراح وب.تحلیلگر.متخصص شبکه.";
const textElement = document.getElementById("text");
let index = 0;
let isDeleting = false;

function typeWriter() {
  if (!isDeleting) {
    textElement.textContent += text[index];
    index++;
    if (index === text.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000); // مکث قبل از پاک شدن
      return;
    }
  } else {
    textElement.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeWriter, speed);
}

typeWriter();