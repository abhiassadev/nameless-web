const toggleButton = document.getElementById('toggleButton');
const toggleMenu = document.getElementById('toggleMenu');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('toggle-button-clicked');
    toggleMenu.classList.toggle('hidden');
    toggleMenu.classList.toggle('flex');
});

fetch('https://nameless-api.vercel.app/members-api')
.then(response => response.json())
.then(data => {
    var output = '';

	data.forEach(data => {
		output += `
        <a href="${data.instagram}">
			<div class="bg-slate-950 h-16 w-64 rounded-md flex gap-5 items-center px-5 shadow-md hover:scale-105 duration-300">
				<div class="">
					<img src="${data.photo}" class="h-10 w-10 rounded-full">	
				</div>	
				<div class="flex flex-col">
					<h1 class="text-green-500 font-medium text-md">${data.name}</h1>	
					<p class="text-white font-normal text-xs">${data.position}</p>	
				</div>	
			</div>
        </a>
					`
	});

	membersPlace.innerHTML = output;
});