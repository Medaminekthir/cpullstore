





//export function toggleDropdown(event) {
let dropdownsbtn=document.querySelectorAll('.dropdown-btn')
dropdownsbtn.forEach(btn=>{
btn.addEventListener('click',(event)=>{
     // event.preventDefault();
      let dropdown = event.target.closest(".dropdown");
      dropdown.classList.toggle("show");

      // Close other dropdowns
     document.querySelectorAll(".dropdown").forEach(d => {
       if (d !== dropdown) d.classList.remove("show");
      });
    })

    // Close dropdown if clicked outside
   window.addEventListener("click", function(e) {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("show"));
      }
    });
})


document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    console.log('hello hitler');
  }
});










