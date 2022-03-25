const renderAnmationItem = (item) => {
    const data = JSON.parse(item.getAttribute("data"));
    item.innerHTML =
    `
    <div class="animate_item_circle">
        <div class="animate_item_header">
            <h2 class="animate_item_title">${data.title}</h2>
            <h3 class="animate_item_description">${data.description}</h3>
        </div>
        <div class="animate_item_body">
            ${
                data.layers.map(layer => 
                `
                <div class="animate_item_layer animate_item_layer_${layer.type}">
                    <img src="${layer.image}" />
                </div>
                `
                )
            }
        </div>
        <div class="animate_item_shadow"></div>
    </div>
    `;
}

const renderAnimationItems = () => {
    const elements = document.querySelectorAll(".animate_item");
    elements.forEach(renderAnmationItem); 
}

window.addEventListener('load', renderAnimationItems);