const search=document.querySelector("#search");

if(search){

  search.addEventListener("input",()=>{

    const text=search.value.toLowerCase().trim();

    document.querySelectorAll(".saga-card").forEach(card=>{

      const name=card.dataset.name.toLowerCase();

      card.style.display=
        name.includes(text)
        ? "grid"
        : "none";

    });

  });

}