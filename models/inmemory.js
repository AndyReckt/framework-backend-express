// importer la classe Qcm
const Qcm = require("./qcm");

// remplacer les simples chaines de caracteres par des instances de la classe Qcm
const qcms = [
    new Qcm({
        id: 0,
        name: "Introduction Vanilla JS",
        nbpoints: 20,
        subject: "Javascript",
        questions: [
            {
                name: "Qu'est ce que Javascript ?",
                answers: [
                    {
                        name: "Un langage de programmation",
                        correct: true,
                    },
                    {
                        name: "Un langage de programmation",
                        correct: false,
                    },
                ],
            },
            {
                name: "Qu'est ce que Javascript ?",
                answers: [
                    {
                        name: "Un langage de programmation",
                        correct: true,
                    },
                    {
                        name: "Un langage de programmation",
                        correct: false,
                    },
                ],
            },
        ],
    }),
    new Qcm({
        id: 1,
        name: "Framework Frontend",
        nbpoints: 20,
        subject: "Angular",
        questions: [
            {
                name: "Qu'est ce que Angular ?",
                answers: [
                    {
                        name: "Un framework frontend",
                        correct: true,
                    },
                    {
                        name: "Un framework frontend",
                        correct: false,
                    },
                ],
            },
            {
                name: "Qu'est ce que Angular ?",
                answers: [
                    {
                        name: "Un framework frontend",
                        correct: true,
                    },
                    {
                        name: "Un framework frontend",
                        correct: false,
                    },
                ],
            },
        ],
    }),
    new Qcm({
        id: 2,
        name: "Framework Backend",
        nbpoints: 10,
        subject: "Express",
        questions: [
            {
                name: "Qu'est ce que Express ?",
                answers: [
                    {
                        name: "Un framework backend",
                        correct: true,
                    },
                    {
                        name: "Un framework backend",
                        correct: false,
                    },
                ],
            },
            {
                name: "Qu'est ce que Express ?",
                answers: [
                    {
                        name: "Un framework backend",
                        correct: true,
                    },
                    {
                        name: "Un framework backend",
                        correct: false,
                    },
                ],
            },
        ],
    }),
];

const addQcm = (rawObject) => {
    //FIXME: fonction qui ajoute un element a la liste et incremente l'id
    let maxId = 0;
    //recupere l'id le plus grand
    qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });
    // creation du QCM avec l id max
    const qcm = new Qcm({
        id: maxId + 1,
        name: rawObject.name,
        subject: rawObject.subject,
        nbpoints: Number(rawObject.nbpoints),
        questions: rawObject.questions,
    });
    // ajout du QCM a la liste
    qcms.push(qcm);
};

module.exports = { qcms, addQcm };
