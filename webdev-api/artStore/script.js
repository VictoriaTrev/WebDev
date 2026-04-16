async function searchItem(){
    const material = document.getElementById("materialType").value;

    fetch(`/items?material=${material}`)
        .then(res => res.json())
        .then(data => {
            let html = "";

            data.forEach(item => {
                html += `
                    <p> 
                        Brand: ${item.brand}
                        Material: ${item.material}
                        Color: ${item.color}
                        Dye Lot: ${item.dyeLot}
                        Amount: ${item.amount}
                        Bar Code: ${item.barCode}
                        Location: ${item.storageLocation}
                        Date Added: ${item.dateAdded}
                    </p> 
                    `;
            });

            document.getElementById("result").innerHTML = html;
        });
};