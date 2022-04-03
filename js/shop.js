const items = [
    {id:'id-1',
    name:'apples',
    price:18,
},
{id:'id-2',
    name:'bananas',
    price:70,
},
{id:'id-3',
    name:'kiwi',
    price:50,
},
];

const shop =  {
    title: 'Silpo',
    items,

    showItems(){
        for (const item of this.items) {
            console.log(
                item.name,item.price
            )
        }
        
    },
    addItem(newItem){
        this.items.push(newItem)
    },
    updateItem(itemName,newName){
        for (const item of this.items) {
            if (item.name===itemName){
                item.name=newName;
            }else{
                console.log('do not finded');
            }
        }
    },
    removeItem(itemName){
        for (const item of this.items) {
            if (item.name===itemName){
                const idx=this.items.indexOf(item)
                this.items.splice(idx,1)
            }
        }

    },
};

// shop.showItems();
// shop.addItem({id:'id-4',
// name:'tomato',
// price:80,
// });
shop.removeItem('bananas');
shop.showItems();