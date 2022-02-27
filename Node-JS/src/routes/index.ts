import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    res.render('pages/home', {
        name: 'Gabriel',
        age: 90,
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}
        ],
        frasesDoDia: [
            'Alguma coisa legal',
            'Outra coisa legal'
        ]
    });
});

router.get('pages/contato', (req: Request, res: Response)=>{
    res.render('contato');
});

router.get('pages/sobre', (req: Request, res: Response)=>{
    res.render('sobre');
});

export default router;