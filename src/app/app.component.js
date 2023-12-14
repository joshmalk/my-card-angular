const details = document.querySelector('summary');
      
      //Toggle Stats 
      document.querySelector('button[data-toggle-btn]').addEventListener('click', () => {
        if(details.parentNode.getAttribute('open')) {
          details.parentNode.removeAttribute('open');
        }
        else {
          details.parentNode.setAttribute('open','open');
        }
      });

      //Duplicate the 1st item/card
      document.querySelector('.duplicate').addEventListener('click', () => {
        const itemToClone = document.querySelector('.wrapper').cloneNode(true);
        document.body.appendChild(itemToClone);
      });

      //Modify name of 1st card
      document.querySelector('.modify').addEventListener('click', () => {
        let name = prompt("Give new name");
        if (name) {
          document.querySelector('.wrapper').querySelector('h3').innerText = name;
        }
      });

      //Delete last item/card
      document.querySelector('#deletelastcard').addEventListener('click', function() {
        const cards = document.querySelectorAll('.wrapper');
      // Check if there are cards to delete
        if (cards.length > 1) {
          const lastCard = cards[cards.length - 1];
          lastCard.parentNode.removeChild(lastCard);
        }
      });

      //Change color of 1st card
      document.querySelector('#changecolorbutton').addEventListener('click', () => {
        if(document.querySelector(".wrapper").style.background == "yellow") {
          document.querySelector(".wrapper").style.background = "blue";
        }
        else {
          document.querySelector(".wrapper").style.background = "yellow";
        }
      });