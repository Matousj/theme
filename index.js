let icon = document.getElementById("icon");

function lightMode() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "img/sun.png";
  } else {
    icon.src = "img/moon.png";
  }
}

function language(input) {
  if (input === "en") {
    document.getElementById("paragraph").textContent =
      "The piece of technology that promotes learning is a laptop. Collaboration may be encouraged via educational technologies. Students can interact with one another throughout lessons in addition to engaging with teachers. Students have the opportunity to collaborate to solve challenges through online classes and educational activities. Students can encourage one another and exchange ideas through collaborative activities (Henriksen 411). Technology also makes it possible for students to engage directly with professors. Students can seek more assistance on concepts that are challenging to comprehend as well as ask questions about the classroom (Lai and Bower 30). Students may upload their schoolwork at home, and teachers can use computers to access and view completed assignments. Moreover, teachers may encourage children’s curiosity and inquisitiveness through entertaining and instructive material, which, according to studies, is linked to academic performance. Students that are curious learn math and reading subjects more effectively. AR, videos, and podcasts may all be used to create compelling content. Students can also engage with peers from across the world or add films in their work.";
    document.getElementById("heading").textContent = "Web Development";
    document.getElementById("language-en").style.backgroundColor = "gray";
    document.getElementById("language-cs").style.backgroundColor = "white";
    document.getElementById("language-cs").style.cursor = "pointer";
    document.getElementById("language-en").style.cursor = "default";
  } else if (input === "cs") {
    document.getElementById("paragraph").textContent =
      "Technologickým zařízením, které podporuje učení, je notebook. Prostřednictvím vzdělávacích technologií lze podporovat spolupráci. Studenti mohou kromě spolupráce s učiteli komunikovat v průběhu výuky také mezi sebou. Studenti mají možnost spolupracovat při řešení úkolů prostřednictvím online tříd a vzdělávacích aktivit. Studenti se mohou vzájemně povzbuzovat a vyměňovat si nápady prostřednictvím společných aktivit (Henriksen 411). Technologie také umožňují studentům zapojit se přímo do komunikace s profesory. Studenti mohou hledat větší pomoc v pojmech, které jsou náročné na pochopení, a také klást otázky týkající se výuky (Lai a Bower 30). Studenti si mohou nahrát své školní úkoly z domova a učitelé mohou pomocí počítačů přistupovat k hotovým úkolům a prohlížet si je. Učitelé navíc mohou prostřednictvím zábavných a poučných materiálů podporovat zvědavost a zvídavost dětí, což podle studií souvisí se studijními výsledky. Žáci, kteří jsou zvídaví, se lépe učí matematiku a čtení. K vytvoření poutavého obsahu lze využít rozšířenou realitu, videa a podcasty. Studenti se také mohou zapojit do spolupráce s vrstevníky z celého světa nebo do své práce přidat filmy.";
    document.getElementById("heading").textContent = "Vývoj Webu";
    document.getElementById("language-cs").style.backgroundColor = "gray";
    document.getElementById("language-en").style.backgroundColor = "white";
    document.getElementById("language-cs").style.cursor = "default";
    document.getElementById("language-en").style.cursor = "pointer";
  }
}
