let buttons = document.getElementsByTagName('a');
let content = document.getElementById('content');

for (let i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ()=>{
        if(buttons[i].innerText == "Home"){
            content.innerHTML = ` <h1>Home</h1><br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto debitis ipsa vitae culpa velit expedita. Perspiciatis sapiente accusamus veniam culpa architecto totam quam, dignissimos, quasi voluptatum vel error aspernatur id.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa consequuntur libero? Porro, consequuntur! Voluptatum, commodi nostrum reprehenderit magni dignissimos maxime fugiat nisi aliquid, totam omnis minus. Labore, ut quia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias voluptatem et cupiditate est. Aut inventore ratione, placeat, voluptatum illo molestias repellendus repellat doloribus facere quisquam delectus quis. Numquam, laborum?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto accusantium reprehenderit fuga adipisci earum non cum placeat, incidunt molestiae, nisi minus at corrupti consequatur ratione ullam delectus nostrum, similique quibusdam.</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum commodi libero nobis eius rem vero sint voluptas saepe iure tempore explicabo ea esse, aspernatur deserunt inventore! Accusantium ea tenetur quos!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugiat sapiente obcaecati maiores ratione ut debitis, totam, nostrum voluptatum quae ipsa non neque reprehenderit magni! In aspernatur adipisci modi sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est debitis eos id consectetur hic, eum tempora nisi, cupiditate nobis deserunt nam neque ex maiores fugit odit alias enim, fuga iste?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo vero quod repudiandae ipsa corporis unde aliquam voluptatum, incidunt eius ipsum nihil hic velit. Obcaecati eligendi necessitatibus cumque cum! Pariatur!</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum commodi libero nobis eius rem vero sint voluptas saepe iure tempore explicabo ea esse, aspernatur deserunt inventore! Accusantium ea tenetur quos!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugiat sapiente obcaecati maiores ratione ut debitis, totam, nostrum voluptatum quae ipsa non neque reprehenderit magni! In aspernatur adipisci modi sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est debitis eos id consectetur hic, eum tempora nisi, cupiditate nobis deserunt nam neque ex maiores fugit odit alias enim, fuga iste?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo vero quod repudiandae ipsa corporis unde aliquam voluptatum, incidunt eius ipsum nihil hic velit. Obcaecati eligendi necessitatibus cumque cum! Pariatur!</p>`;
        }

        else if(buttons[i].innerText == "Contact"){
            content.innerHTML = ` <h1>Contact us</h1><br>
            <p><strong>You can contact us via:</strong></p><br>
            <p>Email - example@gmail.com</p>
            <p>Mob. no. - 919xxxxxxx`
        }

        else if(buttons[i].innerText == "Information"){
            content.innerHTML = ` <h1>Information</h1><br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto debitis ipsa vitae culpa velit expedita. Perspiciatis sapiente accusamus veniam culpa architecto totam quam, dignissimos, quasi voluptatum vel error aspernatur id.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa consequuntur libero? Porro, consequuntur! Voluptatum, commodi nostrum reprehenderit magni dignissimos maxime fugiat nisi aliquid, totam omnis minus. Labore, ut quia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias voluptatem et cupiditate est. Aut inventore ratione, placeat, voluptatum illo molestias repellendus repellat doloribus facere quisquam delectus quis. Numquam, laborum?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto accusantium reprehenderit fuga adipisci earum non cum placeat, incidunt molestiae, nisi minus at corrupti consequatur ratione ullam delectus nostrum, similique quibusdam.</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum commodi libero nobis eius rem vero sint voluptas saepe iure tempore explicabo ea esse, aspernatur deserunt inventore! Accusantium ea tenetur quos!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugiat sapiente obcaecati maiores ratione ut debitis, totam, nostrum voluptatum quae ipsa non neque reprehenderit magni! In aspernatur adipisci modi sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est debitis eos id consectetur hic, eum tempora nisi, cupiditate nobis deserunt nam neque ex maiores fugit odit alias enim, fuga iste?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo vero quod repudiandae ipsa corporis unde aliquam voluptatum, incidunt eius ipsum nihil hic velit. Obcaecati eligendi necessitatibus cumque cum! Pariatur!</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum commodi libero nobis eius rem vero sint voluptas saepe iure tempore explicabo ea esse, aspernatur deserunt inventore! Accusantium ea tenetur quos!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugiat sapiente obcaecati maiores ratione ut debitis, totam, nostrum voluptatum quae ipsa non neque reprehenderit magni! In aspernatur adipisci modi sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est debitis eos id consectetur hic, eum tempora nisi, cupiditate nobis deserunt nam neque ex maiores fugit odit alias enim, fuga iste?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo vero quod repudiandae ipsa corporis unde aliquam voluptatum, incidunt eius ipsum nihil hic velit. Obcaecati eligendi necessitatibus cumque cum! Pariatur!</p>`
        }

        else{
            content.innerHTML = ` <h1>Guide</h1><br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto debitis ipsa vitae culpa velit expedita. Perspiciatis sapiente accusamus veniam culpa architecto totam quam, dignissimos, quasi voluptatum vel error aspernatur id.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa consequuntur libero? Porro, consequuntur! Voluptatum, commodi nostrum reprehenderit magni dignissimos maxime fugiat nisi aliquid, totam omnis minus. Labore, ut quia!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias voluptatem et cupiditate est. Aut inventore ratione, placeat, voluptatum illo molestias repellendus repellat doloribus facere quisquam delectus quis. Numquam, laborum?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto accusantium reprehenderit fuga adipisci earum non cum placeat, incidunt molestiae, nisi minus at corrupti consequatur ratione ullam delectus nostrum, similique quibusdam.</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum commodi libero nobis eius rem vero sint voluptas saepe iure tempore explicabo ea esse, aspernatur deserunt inventore! Accusantium ea tenetur quos!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugiat sapiente obcaecati maiores ratione ut debitis, totam, nostrum voluptatum quae ipsa non neque reprehenderit magni! In aspernatur adipisci modi sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est debitis eos id consectetur hic, eum tempora nisi, cupiditate nobis deserunt nam neque ex maiores fugit odit alias enim, fuga iste?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo vero quod repudiandae ipsa corporis unde aliquam voluptatum, incidunt eius ipsum nihil hic velit. Obcaecati eligendi necessitatibus cumque cum! Pariatur!</p>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum commodi libero nobis eius rem vero sint voluptas saepe iure tempore explicabo ea esse, aspernatur deserunt inventore! Accusantium ea tenetur quos!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores fugiat sapiente obcaecati maiores ratione ut debitis, totam, nostrum voluptatum quae ipsa non neque reprehenderit magni! In aspernatur adipisci modi sint!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est debitis eos id consectetur hic, eum tempora nisi, cupiditate nobis deserunt nam neque ex maiores fugit odit alias enim, fuga iste?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nemo vero quod repudiandae ipsa corporis unde aliquam voluptatum, incidunt eius ipsum nihil hic velit. Obcaecati eligendi necessitatibus cumque cum! Pariatur!</p>`
        }
    });
    
}