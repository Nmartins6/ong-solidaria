import "../css/style.css";

import {
  initRouter,
  navigate
} from "./router.js";

import {
  homeTemplate,
  projetosTemplate,
  cadastroTemplate,
  voluntariosTemplate,
  notFoundTemplate
} from "./templates.js";

import {
  addVoluntario,
  getVoluntarios,
  removeVoluntario
} from "./storage.js";

import {
  validateForm,
  initLiveValidation
} from "./validation.js";

import {
  initMasks
} from "./masks.js";

import {
  initComponents,
  showToast,
  confirmAction
} from "./components.js";


const app =
    document.querySelector("#app");


function updateNavigation(route) {
    document
        .querySelectorAll(
            "[data-route]"
        )
        .forEach((link) => {

            if (
                link.dataset.route === route
            ) {
                link.setAttribute(
                    "aria-current",
                    "page"
                );
            } else {
                link.removeAttribute(
                    "aria-current"
                );
            }

        });
}


function render(route) {
    updateNavigation(route);


    switch (route) {

        case "home":
            app.innerHTML =
                homeTemplate();

            break;


        case "projetos":
            app.innerHTML =
                projetosTemplate();

            break;


        case "cadastro":
            app.innerHTML =
                cadastroTemplate();

            initCadastro();

            break;


        case "voluntarios":
            app.innerHTML =
                voluntariosTemplate(
                    getVoluntarios()
                );

            initVoluntarios();

            break;


        default:
            app.innerHTML =
                notFoundTemplate();
    }


    app.focus({
        preventScroll: true
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function initCadastro() {
    const form =
        document.querySelector(
            "#volunteer-form"
        );

    if (!form) {
        return;
    }


    initMasks();

    initLiveValidation(form);


    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            if (!validateForm(form)) {
                showToast(
                    "Corrija os campos destacados antes de continuar.",
                    "error"
                );

                return;
            }


            const data =
                new FormData(form);


            const voluntario = {
                nome:
                    data.get("nome").trim(),

                cpf:
                    data.get("cpf").trim(),

                nascimento:
                    data.get("nascimento"),

                email:
                    data.get("email").trim(),

                telefone:
                    data.get("telefone").trim(),

                cep:
                    data.get("cep").trim(),

                endereco:
                    data.get("endereco").trim(),

                cidade:
                    data.get("cidade").trim(),

                estado:
                    data.get("estado"),

                area:
                    data.get("area"),

                mensagem:
                    data.get("mensagem")?.trim() ?? ""
            };


            addVoluntario(
                voluntario
            );


            showToast(
                "Cadastro realizado e armazenado no navegador.",
                "success"
            );


            navigate(
                "voluntarios"
            );
        }
    );
}


function initVoluntarios() {
    const buttons =
        document.querySelectorAll(
            "[data-delete-volunteer]"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "click",
            async () => {

                const id =
                    button.dataset
                        .deleteVolunteer;


                const confirmed =
                    await confirmAction({
                        title:
                            "Excluir voluntário",

                        message:
                            "Tem certeza de que deseja excluir este cadastro?",

                        confirmText:
                            "Excluir"
                    });


                if (!confirmed) {
                    return;
                }


                removeVoluntario(id);


                showToast(
                    "Cadastro removido com sucesso.",
                    "success"
                );


                render(
                    "voluntarios"
                );
            }
        );

    });
}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initComponents();

        initRouter(render);

    }
);