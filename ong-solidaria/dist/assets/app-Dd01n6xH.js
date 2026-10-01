(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const W=new Set(["home","projetos","cadastro","voluntarios"]);let U=null;function de(){const a=window.location.hash.replace("#","").trim();return a?W.has(a)?a:"404":"home"}function P(){U&&U(de())}function Q(a){const t=`#${W.has(a)?a:"home"}`;window.location.hash!==t&&history.pushState(null,"",t),P()}function ce(a){U=a,document.addEventListener("click",e=>{const t=e.target.closest("[data-route]");if(!t)return;e.preventDefault();const s=t.dataset.route;Q(s)}),window.addEventListener("popstate",P),P()}const pe=""+new URL("ong-hero-B8yfUMAU.png",import.meta.url).href,fe=""+new URL("alimento-para-todos-0fP8VGUf.png",import.meta.url).href,me=""+new URL("educacao-que-transforma-ByPzOAij.png",import.meta.url).href,ge=""+new URL("campanha-do-agasalho-DtRBAyFl.png",import.meta.url).href,ve=[{id:1,titulo:"Alimento para Todos",descricao:"Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.",imagem:fe,status:"Ativo"},{id:2,titulo:"Educação que Transforma",descricao:"Reforço escolar, inclusão digital e atividades educacionais para crianças e adolescentes.",imagem:me,status:"Em andamento"},{id:3,titulo:"Campanha do Agasalho",descricao:"Arrecadação de roupas, calçados e cobertores para pessoas que necessitam de apoio durante o inverno.",imagem:ge,status:"Ativo"}];function _(a=""){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function ke(a){if(!a)return"";const e=new Date(a);return Number.isNaN(e.getTime())?a:new Intl.DateTimeFormat("pt-BR").format(e)}function _e(){return`
    <section class="hero">
      <div class="container">

        <img
          src="${pe}"
          alt="Voluntários participando de uma ação social"
        >

        <h1>
          Solidariedade em Ação
        </h1>

        <p>
          Conectamos pessoas dispostas a ajudar
          com comunidades que precisam de apoio.
        </p>

        <a
          href="#cadastro"
          data-route="cadastro"
          class="button"
        >
          Quero ser voluntário
        </a>

      </div>
    </section>


    <section class="section">
      <div class="container">

        <div class="section-header">
          <p class="eyebrow">
            Nossa missão
          </p>

          <h2>
            Transformando solidariedade em impacto
          </h2>

          <p>
            Desenvolvemos projetos sociais nas áreas
            de educação, alimentação e assistência
            comunitária.
          </p>
        </div>

        <div class="grid-12">

          <article class="feature-card">
            <h3>Projetos sociais</h3>

            <p>
              Conheça as iniciativas desenvolvidas
              pela organização.
            </p>

            <a
              href="#projetos"
              data-route="projetos"
            >
              Ver projetos →
            </a>
          </article>

          <article class="feature-card">
            <h3>Voluntariado</h3>

            <p>
              Doe seu tempo e suas habilidades para
              ajudar nossa comunidade.
            </p>

            <a
              href="#cadastro"
              data-route="cadastro"
            >
              Quero participar →
            </a>
          </article>

          <article class="feature-card">
            <h3>Comunidade</h3>

            <p>
              Pessoas trabalhando juntas para construir
              uma sociedade mais solidária.
            </p>
          </article>

        </div>

      </div>
    </section>
  `}function Ee(){return`
    <section class="section">
      <div class="container">

        <div class="section-header">
          <p class="eyebrow">
            Iniciativas
          </p>

          <h1>
            Nossos projetos
          </h1>

          <p>
            Conheça nossas principais frentes
            de atuação social.
          </p>
        </div>

        <div class="grid-12 projects-grid">
          ${ve.map(e=>`
      <article class="project-card">

        <img
          src="${e.imagem}"
          alt="${_(e.titulo)}"
        >

        <div class="project-card-content">

          <span class="badge badge-success">
            ${_(e.status)}
          </span>

          <h2>
            ${_(e.titulo)}
          </h2>

          <p>
            ${_(e.descricao)}
          </p>

          <a
            href="#cadastro"
            data-route="cadastro"
            class="button button-small"
          >
            Quero colaborar
          </a>

        </div>

      </article>
    `).join("")}
        </div>

      </div>
    </section>
  `}function Ce(){return`
    <section class="section">

      <div class="container">

        <div class="section-header">
          <p class="eyebrow">
            Participação
          </p>

          <h1>
            Cadastro de voluntário
          </h1>

          <p>
            Preencha seus dados para demonstrar
            interesse em participar das nossas ações.
          </p>
        </div>


        <form
          id="volunteer-form"
          class="form-card"
          novalidate
        >

          <fieldset>

            <legend>
              Dados pessoais
            </legend>


            <div class="form-group">

              <label for="nome">
                Nome completo
              </label>

              <input
                type="text"
                id="nome"
                name="nome"
                autocomplete="name"
                minlength="3"
                required
              >

              <span
                class="error-message"
                id="nome-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="cpf">
                CPF
              </label>

              <input
                type="text"
                id="cpf"
                name="cpf"
                inputmode="numeric"
                placeholder="000.000.000-00"
                maxlength="14"
                required
              >

              <span
                class="error-message"
                id="cpf-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="nascimento">
                Data de nascimento
              </label>

              <input
                type="date"
                id="nascimento"
                name="nascimento"
                required
              >

              <span
                class="error-message"
                id="nascimento-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="email">
                E-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autocomplete="email"
                required
              >

              <span
                class="error-message"
                id="email-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="telefone">
                Telefone
              </label>

              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                maxlength="15"
                required
              >

              <span
                class="error-message"
                id="telefone-error"
              ></span>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Endereço
            </legend>


            <div class="form-group">

              <label for="cep">
                CEP
              </label>

              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                maxlength="9"
                required
              >

              <span
                class="error-message"
                id="cep-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="endereco">
                Endereço
              </label>

              <input
                type="text"
                id="endereco"
                name="endereco"
                required
              >

              <span
                class="error-message"
                id="endereco-error"
              ></span>

            </div>


            <div class="form-grid">

              <div class="form-group">

                <label for="cidade">
                  Cidade
                </label>

                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                >

                <span
                  class="error-message"
                  id="cidade-error"
                ></span>

              </div>


              <div class="form-group">

                <label for="estado">
                  Estado
                </label>

                <select
                  id="estado"
                  name="estado"
                  required
                >
                  <option value="">
                    Selecione
                  </option>

                  <option value="RS">
                    Rio Grande do Sul
                  </option>

                  <option value="SC">
                    Santa Catarina
                  </option>

                  <option value="PR">
                    Paraná
                  </option>

                  <option value="SP">
                    São Paulo
                  </option>

                  <option value="RJ">
                    Rio de Janeiro
                  </option>
                </select>

                <span
                  class="error-message"
                  id="estado-error"
                ></span>

              </div>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Participação
            </legend>


            <div class="form-group">

              <label for="area">
                Área de interesse
              </label>

              <select
                id="area"
                name="area"
                required
              >

                <option value="">
                  Selecione
                </option>

                <option value="Educação">
                  Educação
                </option>

                <option value="Alimentação">
                  Alimentação
                </option>

                <option value="Eventos">
                  Eventos
                </option>

                <option value="Comunicação">
                  Comunicação
                </option>

                <option value="Administrativo">
                  Administrativo
                </option>

              </select>

              <span
                class="error-message"
                id="area-error"
              ></span>

            </div>


            <div class="form-group">

              <label for="mensagem">
                Como deseja colaborar?
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                maxlength="500"
              ></textarea>

            </div>


            <div class="checkbox-group">

              <input
                type="checkbox"
                id="termos"
                name="termos"
                required
              >

              <label for="termos">
                Concordo com o tratamento dos meus
                dados para fins relacionados ao
                programa de voluntariado.
              </label>

            </div>

            <span
              class="error-message"
              id="termos-error"
            ></span>

          </fieldset>


          <button
            type="submit"
            class="button"
          >
            Enviar cadastro
          </button>

        </form>

      </div>
    </section>
  `}function Ae(a){return a.length?`
    <section class="section">

      <div class="container">

        <div class="section-header">

          <p class="eyebrow">
            LocalStorage
          </p>

          <h1>
            Voluntários cadastrados
          </h1>

          <p>
            Estes dados foram recuperados diretamente
            do armazenamento local do navegador.
          </p>

        </div>

        <div class="volunteer-list">
          ${a.map(t=>`
      <article class="volunteer-card">

        <div class="volunteer-card-header">

          <div>
            <span class="badge badge-success">
              Voluntário
            </span>

            <h2>
              ${_(t.nome)}
            </h2>
          </div>

          <button
            type="button"
            class="button-icon danger"
            data-delete-volunteer="${t.id}"
            aria-label="Excluir ${_(t.nome)}"
          >
            ×
          </button>

        </div>


        <dl class="volunteer-details">

          <div>
            <dt>E-mail</dt>
            <dd>
              ${_(t.email)}
            </dd>
          </div>

          <div>
            <dt>Telefone</dt>
            <dd>
              ${_(t.telefone)}
            </dd>
          </div>

          <div>
            <dt>Cidade</dt>
            <dd>
              ${_(t.cidade)}
              -
              ${_(t.estado)}
            </dd>
          </div>

          <div>
            <dt>Área</dt>
            <dd>
              ${_(t.area)}
            </dd>
          </div>

          <div>
            <dt>Cadastro</dt>
            <dd>
              ${ke(t.criadoEm)}
            </dd>
          </div>

        </dl>

      </article>
    `).join("")}
        </div>

      </div>

    </section>
  `:`
      <section class="section">

        <div class="container">

          <div class="section-header">
            <p class="eyebrow">
              LocalStorage
            </p>

            <h1>
              Voluntários cadastrados
            </h1>
          </div>

          <div class="empty-state">

            <h2>
              Nenhum voluntário cadastrado
            </h2>

            <p>
              Os cadastros realizados serão armazenados
              no navegador e aparecerão aqui.
            </p>

            <a
              href="#cadastro"
              data-route="cadastro"
              class="button"
            >
              Fazer primeiro cadastro
            </a>

          </div>

        </div>

      </section>
    `}function Fe(){return`
    <section class="section">

      <div class="container empty-state">

        <h1>
          Página não encontrada
        </h1>

        <a
          href="#home"
          data-route="home"
          class="button"
        >
          Voltar ao início
        </a>

      </div>

    </section>
  `}const ee="ong-voluntarios";function z(){try{const a=localStorage.getItem(ee);if(!a)return[];const e=JSON.parse(a);return Array.isArray(e)?e:[]}catch(a){return console.error("Erro ao recuperar voluntários:",a),[]}}function te(a){localStorage.setItem(ee,JSON.stringify(a))}function be(a){const e=z(),t={id:crypto.randomUUID?.()??`${Date.now()}-${Math.random()}`,...a,criadoEm:new Date().toISOString()};return e.push(t),te(e),t}function Se(a){const e=z().filter(t=>t.id!==a);te(e)}function xe(a){return a.replace(/\D/g,"")}function ye(a){const e=xe(a);if(e.length!==11||/^(\d)\1{10}$/.test(e))return!1;let t=0;for(let n=0;n<9;n++)t+=Number(e[n])*(10-n);let s=t*10%11;if(s===10&&(s=0),s!==Number(e[9]))return!1;t=0;for(let n=0;n<10;n++)t+=Number(e[n])*(11-n);let i=t*10%11;return i===10&&(i=0),i===Number(e[10])}function Be(a){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)}function we(a){return/^\(\d{2}\) \d{5}-\d{4}$/.test(a)}function Ie(a){return/^\d{5}-\d{3}$/.test(a)}function De(a){if(!a)return!1;const e=new Date(`${a}T00:00:00`),t=new Date;return!Number.isNaN(e.getTime())&&e<=t}function se(a){return document.querySelector(`#${a.id}-error`)}function C(a,e){a.classList.remove("is-valid"),a.classList.add("is-invalid"),a.setAttribute("aria-invalid","true");const t=se(a);t&&(t.textContent=e)}function Ve(a){a.classList.remove("is-invalid"),a.classList.add("is-valid"),a.setAttribute("aria-invalid","false");const e=se(a);e&&(e.textContent="")}function $(a){const e=a.type==="checkbox"?a.checked:a.value.trim();switch(a.id){case"nome":if(typeof e!="string"||e.length<3)return C(a,"Informe seu nome completo."),!1;break;case"cpf":if(!ye(e))return C(a,"Informe um CPF válido."),!1;break;case"nascimento":if(!De(e))return C(a,"Informe uma data de nascimento válida."),!1;break;case"email":if(!Be(e))return C(a,"Informe um e-mail válido."),!1;break;case"telefone":if(!we(e))return C(a,"Use o formato (00) 00000-0000."),!1;break;case"cep":if(!Ie(e))return C(a,"Use o formato 00000-000."),!1;break;case"endereco":case"cidade":if(typeof e!="string"||e.length<2)return C(a,"Este campo é obrigatório."),!1;break;case"estado":case"area":if(!e)return C(a,"Selecione uma opção."),!1;break;case"termos":if(!a.checked)return C(a,"Você precisa aceitar os termos."),!1;break}return Ve(a),!0}function Te(a){const e=a.querySelectorAll("input[required], select[required]");let t=!0,s=null;return e.forEach(i=>{$(i)||(t=!1,s||(s=i))}),s&&s.focus(),t}function Me(a){a.querySelectorAll("input, select, textarea").forEach(t=>{const s=t.type==="checkbox"||t.tagName==="SELECT"?"change":"input";t.addEventListener(s,()=>{(t.required||t.value)&&$(t)}),t.addEventListener("blur",()=>{t.required&&$(t)})})}function b(a){return typeof a=="string"||a instanceof String}function Z(a){var e;return typeof a=="object"&&a!=null&&(a==null||(e=a.constructor)==null?void 0:e.name)==="Object"}function ie(a,e){return Array.isArray(e)?ie(a,(t,s)=>e.includes(s)):Object.entries(a).reduce((t,s)=>{let[i,n]=s;return e(n,i)&&(t[i]=n),t},{})}const l={NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT"};function Re(a){switch(a){case l.LEFT:return l.FORCE_LEFT;case l.RIGHT:return l.FORCE_RIGHT;default:return a}}function N(a){return a.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")}function D(a,e){if(e===a)return!0;const t=Array.isArray(e),s=Array.isArray(a);let i;if(t&&s){if(e.length!=a.length)return!1;for(i=0;i<e.length;i++)if(!D(e[i],a[i]))return!1;return!0}if(t!=s)return!1;if(e&&a&&typeof e=="object"&&typeof a=="object"){const n=e instanceof Date,r=a instanceof Date;if(n&&r)return e.getTime()==a.getTime();if(n!=r)return!1;const u=e instanceof RegExp,o=a instanceof RegExp;if(u&&o)return e.toString()==a.toString();if(u!=o)return!1;const h=Object.keys(e);for(i=0;i<h.length;i++)if(!Object.prototype.hasOwnProperty.call(a,h[i]))return!1;for(i=0;i<h.length;i++)if(!D(a[h[i]],e[h[i]]))return!1;return!0}else if(e&&a&&typeof e=="function"&&typeof a=="function")return e.toString()===a.toString();return!1}class Le{constructor(e){for(Object.assign(this,e);this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start;if(this.insertedCount)for(;this.value.slice(this.cursorPos)!==this.oldValue.slice(this.oldSelection.end);)this.value.length-this.cursorPos<this.oldValue.length-this.oldSelection.end?++this.oldSelection.end:++this.cursorPos}get startChangePos(){return Math.min(this.cursorPos,this.oldSelection.start)}get insertedCount(){return this.cursorPos-this.startChangePos}get inserted(){return this.value.substr(this.startChangePos,this.insertedCount)}get removedCount(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}get removed(){return this.oldValue.substr(this.startChangePos,this.removedCount)}get head(){return this.value.substring(0,this.startChangePos)}get tail(){return this.value.substring(this.startChangePos+this.insertedCount)}get removeDirection(){return!this.removedCount||this.insertedCount?l.NONE:(this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos)&&this.oldSelection.end===this.oldSelection.start?l.RIGHT:l.LEFT}}function d(a,e){return new d.InputMask(a,e)}function ae(a){if(a==null)throw new Error("mask property should be defined");return a instanceof RegExp?d.MaskedRegExp:b(a)?d.MaskedPattern:a===Date?d.MaskedDate:a===Number?d.MaskedNumber:Array.isArray(a)||a===Array?d.MaskedDynamic:d.Masked&&a.prototype instanceof d.Masked?a:d.Masked&&a instanceof d.Masked?a.constructor:a instanceof Function?d.MaskedFunction:(console.warn("Mask not found for mask",a),d.Masked)}function w(a){if(!a)throw new Error("Options in not defined");if(d.Masked){if(a.prototype instanceof d.Masked)return{mask:a};const{mask:e=void 0,...t}=a instanceof d.Masked?{mask:a}:Z(a)&&a.mask instanceof d.Masked?a:{};if(e){const s=e.mask;return{...ie(e,(i,n)=>!n.startsWith("_")),mask:e.constructor,_mask:s,...t}}}return Z(a)?{...a}:{mask:a}}function F(a){if(d.Masked&&a instanceof d.Masked)return a;const e=w(a),t=ae(e.mask);if(!t)throw new Error("Masked class is not found for provided mask "+e.mask+", appropriate module needs to be imported manually before creating mask.");return e.mask===t&&delete e.mask,e._mask&&(e.mask=e._mask,delete e._mask),new t(e)}d.createMask=F;class G{get selectionStart(){let e;try{e=this._unsafeSelectionStart}catch{}return e??this.value.length}get selectionEnd(){let e;try{e=this._unsafeSelectionEnd}catch{}return e??this.value.length}select(e,t){if(!(e==null||t==null||e===this.selectionStart&&t===this.selectionEnd))try{this._unsafeSelect(e,t)}catch{}}get isActive(){return!1}}d.MaskElement=G;const X=90,Oe=89;class T extends G{constructor(e){super(),this.input=e,this._onKeydown=this._onKeydown.bind(this),this._onInput=this._onInput.bind(this),this._onBeforeinput=this._onBeforeinput.bind(this),this._onCompositionEnd=this._onCompositionEnd.bind(this)}get rootElement(){var e,t,s;return(e=(t=(s=this.input).getRootNode)==null?void 0:t.call(s))!=null?e:document}get isActive(){return this.input===this.rootElement.activeElement}bindEvents(e){this.input.addEventListener("keydown",this._onKeydown),this.input.addEventListener("input",this._onInput),this.input.addEventListener("beforeinput",this._onBeforeinput),this.input.addEventListener("compositionend",this._onCompositionEnd),this.input.addEventListener("drop",e.drop),this.input.addEventListener("click",e.click),this.input.addEventListener("focus",e.focus),this.input.addEventListener("blur",e.commit),this._handlers=e}_onKeydown(e){if(this._handlers.redo&&(e.keyCode===X&&e.shiftKey&&(e.metaKey||e.ctrlKey)||e.keyCode===Oe&&e.ctrlKey))return e.preventDefault(),this._handlers.redo(e);if(this._handlers.undo&&e.keyCode===X&&(e.metaKey||e.ctrlKey))return e.preventDefault(),this._handlers.undo(e);e.isComposing||this._handlers.selectionChange(e)}_onBeforeinput(e){if(e.inputType==="historyUndo"&&this._handlers.undo)return e.preventDefault(),this._handlers.undo(e);if(e.inputType==="historyRedo"&&this._handlers.redo)return e.preventDefault(),this._handlers.redo(e)}_onCompositionEnd(e){this._handlers.input(e)}_onInput(e){e.isComposing||this._handlers.input(e)}unbindEvents(){this.input.removeEventListener("keydown",this._onKeydown),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("beforeinput",this._onBeforeinput),this.input.removeEventListener("compositionend",this._onCompositionEnd),this.input.removeEventListener("drop",this._handlers.drop),this.input.removeEventListener("click",this._handlers.click),this.input.removeEventListener("focus",this._handlers.focus),this.input.removeEventListener("blur",this._handlers.commit),this._handlers={}}}d.HTMLMaskElement=T;class Ne extends T{constructor(e){super(e),this.input=e}get _unsafeSelectionStart(){return this.input.selectionStart!=null?this.input.selectionStart:this.value.length}get _unsafeSelectionEnd(){return this.input.selectionEnd}_unsafeSelect(e,t){this.input.setSelectionRange(e,t)}get value(){return this.input.value}set value(e){this.input.value=e}}d.HTMLMaskElement=T;class ne extends T{get _unsafeSelectionStart(){const e=this.rootElement,t=e.getSelection&&e.getSelection(),s=t&&t.anchorOffset,i=t&&t.focusOffset;return i==null||s==null||s<i?s:i}get _unsafeSelectionEnd(){const e=this.rootElement,t=e.getSelection&&e.getSelection(),s=t&&t.anchorOffset,i=t&&t.focusOffset;return i==null||s==null||s>i?s:i}_unsafeSelect(e,t){if(!this.rootElement.createRange)return;const s=this.rootElement.createRange();s.setStart(this.input.firstChild||this.input,e),s.setEnd(this.input.lastChild||this.input,t);const i=this.rootElement,n=i.getSelection&&i.getSelection();n&&(n.removeAllRanges(),n.addRange(s))}get value(){return this.input.textContent||""}set value(e){this.input.textContent=e}}d.HTMLContenteditableMaskElement=ne;class M{constructor(){this.states=[],this.currentIndex=0}get currentState(){return this.states[this.currentIndex]}get isEmpty(){return this.states.length===0}push(e){this.currentIndex<this.states.length-1&&(this.states.length=this.currentIndex+1),this.states.push(e),this.states.length>M.MAX_LENGTH&&this.states.shift(),this.currentIndex=this.states.length-1}go(e){return this.currentIndex=Math.min(Math.max(this.currentIndex+e,0),this.states.length-1),this.currentState}undo(){return this.go(-1)}redo(){return this.go(1)}clear(){this.states.length=0,this.currentIndex=0}}M.MAX_LENGTH=100;class qe{constructor(e,t){this.el=e instanceof G?e:e.isContentEditable&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"?new ne(e):new Ne(e),this.masked=F(t),this._listeners={},this._value="",this._unmaskedValue="",this._rawInputValue="",this.history=new M,this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this._onUndo=this._onUndo.bind(this),this._onRedo=this._onRedo.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}maskEquals(e){var t;return e==null||((t=this.masked)==null?void 0:t.maskEquals(e))}get mask(){return this.masked.mask}set mask(e){if(this.maskEquals(e))return;if(!(e instanceof d.Masked)&&this.masked.constructor===ae(e)){this.masked.updateOptions({mask:e});return}const t=e instanceof d.Masked?e:F({mask:e});t.unmaskedValue=this.masked.unmaskedValue,this.masked=t}get value(){return this._value}set value(e){this.value!==e&&(this.masked.value=e,this.updateControl("auto"))}get unmaskedValue(){return this._unmaskedValue}set unmaskedValue(e){this.unmaskedValue!==e&&(this.masked.unmaskedValue=e,this.updateControl("auto"))}get rawInputValue(){return this._rawInputValue}set rawInputValue(e){this.rawInputValue!==e&&(this.masked.rawInputValue=e,this.updateControl(),this.alignCursor())}get typedValue(){return this.masked.typedValue}set typedValue(e){this.masked.typedValueEquals(e)||(this.masked.typedValue=e,this.updateControl("auto"))}get displayValue(){return this.masked.displayValue}_bindEvents(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange,undo:this._onUndo,redo:this._onRedo})}_unbindEvents(){this.el&&this.el.unbindEvents()}_fireEvent(e,t){const s=this._listeners[e];s&&s.forEach(i=>i(t))}get selectionStart(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}get cursorPos(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd}set cursorPos(e){!this.el||!this.el.isActive||(this.el.select(e,e),this._saveSelection())}_saveSelection(){this.displayValue!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}updateValue(){this.masked.value=this.el.value,this._value=this.masked.value,this._unmaskedValue=this.masked.unmaskedValue,this._rawInputValue=this.masked.rawInputValue}updateControl(e){const t=this.masked.unmaskedValue,s=this.masked.value,i=this.masked.rawInputValue,n=this.displayValue,r=this.unmaskedValue!==t||this.value!==s||this._rawInputValue!==i;this._unmaskedValue=t,this._value=s,this._rawInputValue=i,this.el.value!==n&&(this.el.value=n),e==="auto"?this.alignCursor():e!=null&&(this.cursorPos=e),r&&this._fireChangeEvents(),!this._historyChanging&&(r||this.history.isEmpty)&&this.history.push({unmaskedValue:t,selection:{start:this.selectionStart,end:this.cursorPos}})}updateOptions(e){const{mask:t,...s}=e,i=!this.maskEquals(t),n=this.masked.optionsIsChanged(s);i&&(this.mask=t),n&&this.masked.updateOptions(s),(i||n)&&this.updateControl()}updateCursor(e){e!=null&&(this.cursorPos=e,this._delayUpdateCursor(e))}_delayUpdateCursor(e){this._abortUpdateCursor(),this._changingCursorPos=e,this._cursorChanging=setTimeout(()=>{this.el&&(this.cursorPos=this._changingCursorPos,this._abortUpdateCursor())},10)}_fireChangeEvents(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}_abortUpdateCursor(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}alignCursor(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,l.LEFT))}alignCursorFriendly(){this.selectionStart===this.cursorPos&&this.alignCursor()}on(e,t){return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t),this}off(e,t){if(!this._listeners[e])return this;if(!t)return delete this._listeners[e],this;const s=this._listeners[e].indexOf(t);return s>=0&&this._listeners[e].splice(s,1),this}_onInput(e){this._inputEvent=e,this._abortUpdateCursor();const t=new Le({value:this.el.value,cursorPos:this.cursorPos,oldValue:this.displayValue,oldSelection:this._selection}),s=this.masked.rawInputValue,i=this.masked.splice(t.startChangePos,t.removed.length,t.inserted,t.removeDirection,{input:!0,raw:!0}).offset,n=s===this.masked.rawInputValue?t.removeDirection:l.NONE;let r=this.masked.nearestInputPos(t.startChangePos+i,n);n!==l.NONE&&(r=this.masked.nearestInputPos(r,l.NONE)),this.updateControl(r),delete this._inputEvent}_onChange(){this.displayValue!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}_onDrop(e){e.preventDefault(),e.stopPropagation()}_onFocus(e){this.alignCursorFriendly()}_onClick(e){this.alignCursorFriendly()}_onUndo(){this._applyHistoryState(this.history.undo())}_onRedo(){this._applyHistoryState(this.history.redo())}_applyHistoryState(e){e&&(this._historyChanging=!0,this.unmaskedValue=e.unmaskedValue,this.el.select(e.selection.start,e.selection.end),this._saveSelection(),this._historyChanging=!1)}destroy(){this._unbindEvents(),this._listeners.length=0,delete this.el}}d.InputMask=qe;class c{static normalize(e){return Array.isArray(e)?e:[e,new c]}constructor(e){Object.assign(this,{inserted:"",rawInserted:"",tailShift:0,skip:!1},e)}aggregate(e){return this.inserted+=e.inserted,this.rawInserted+=e.rawInserted,this.tailShift+=e.tailShift,this.skip=this.skip||e.skip,this}get offset(){return this.tailShift+this.inserted.length}get consumed(){return!!this.rawInserted||this.skip}equals(e){return this.inserted===e.inserted&&this.tailShift===e.tailShift&&this.rawInserted===e.rawInserted&&this.skip===e.skip}}d.ChangeDetails=c;class E{constructor(e,t,s){e===void 0&&(e=""),t===void 0&&(t=0),this.value=e,this.from=t,this.stop=s}toString(){return this.value}extend(e){this.value+=String(e)}appendTo(e){return e.append(this.toString(),{tail:!0}).aggregate(e._appendPlaceholder())}get state(){return{value:this.value,from:this.from,stop:this.stop}}set state(e){Object.assign(this,e)}unshift(e){if(!this.value.length||e!=null&&this.from>=e)return"";const t=this.value[0];return this.value=this.value.slice(1),t}shift(){if(!this.value.length)return"";const e=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),e}}class g{constructor(e){this._value="",this._update({...g.DEFAULTS,...e}),this._initialized=!0}updateOptions(e){this.optionsIsChanged(e)&&this.withValueRefresh(this._update.bind(this,e))}_update(e){Object.assign(this,e)}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value}reset(){this._value=""}get value(){return this._value}set value(e){this.resolve(e,{input:!0})}resolve(e,t){t===void 0&&(t={input:!0}),this.reset(),this.append(e,t,""),this.doCommit()}get unmaskedValue(){return this.value}set unmaskedValue(e){this.resolve(e,{})}get typedValue(){return this.parse?this.parse(this.value,this):this.unmaskedValue}set typedValue(e){this.format?this.value=this.format(e,this):this.unmaskedValue=String(e)}get rawInputValue(){return this.extractInput(0,this.displayValue.length,{raw:!0})}set rawInputValue(e){this.resolve(e,{raw:!0})}get displayValue(){return this.value}get isComplete(){return!0}get isFilled(){return this.isComplete}nearestInputPos(e,t){return e}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),Math.min(this.displayValue.length,t-e)}extractInput(e,t,s){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),this.displayValue.slice(e,t)}extractTail(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),new E(this.extractInput(e,t),e)}appendTail(e){return b(e)&&(e=new E(String(e))),e.appendTo(this)}_appendCharRaw(e,t){return e?(this._value+=e,new c({inserted:e,rawInserted:e})):new c}_appendChar(e,t,s){t===void 0&&(t={});const i=this.state;let n;if([e,n]=this.doPrepareChar(e,t),e&&(n=n.aggregate(this._appendCharRaw(e,t)),!n.rawInserted&&this.autofix==="pad")){const r=this.state;this.state=i;let u=this.pad(t);const o=this._appendCharRaw(e,t);u=u.aggregate(o),o.rawInserted||u.equals(n)?n=u:this.state=r}if(n.inserted){let r,u=this.doValidate(t)!==!1;if(u&&s!=null){const o=this.state;if(this.overwrite===!0){r=s.state;for(let p=0;p<n.rawInserted.length;++p)s.unshift(this.displayValue.length-n.tailShift)}let h=this.appendTail(s);if(u=h.rawInserted.length===s.toString().length,!(u&&h.inserted)&&this.overwrite==="shift"){this.state=o,r=s.state;for(let p=0;p<n.rawInserted.length;++p)s.shift();h=this.appendTail(s),u=h.rawInserted.length===s.toString().length}u&&h.inserted&&(this.state=o)}u||(n=new c,this.state=i,s&&r&&(s.state=r))}return n}_appendPlaceholder(){return new c}_appendEager(){return new c}append(e,t,s){if(!b(e))throw new Error("value should be string");const i=b(s)?new E(String(s)):s;t!=null&&t.tail&&(t._beforeTailState=this.state);let n;[e,n]=this.doPrepare(e,t);for(let r=0;r<e.length;++r){const u=this._appendChar(e[r],t,i);if(!u.rawInserted&&!this.doSkipInvalid(e[r],t,i))break;n.aggregate(u)}return(this.eager===!0||this.eager==="append")&&t!=null&&t.input&&e&&n.aggregate(this._appendEager()),i!=null&&(n.tailShift+=this.appendTail(i).tailShift),n}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),this._value=this.displayValue.slice(0,e)+this.displayValue.slice(t),new c}withValueRefresh(e){if(this._refreshing||!this._initialized)return e();this._refreshing=!0;const t=this.rawInputValue,s=this.value,i=e();return this.rawInputValue=t,this.value&&this.value!==s&&s.indexOf(this.value)===0&&(this.append(s.slice(this.displayValue.length),{},""),this.doCommit()),delete this._refreshing,i}runIsolated(e){if(this._isolated||!this._initialized)return e(this);this._isolated=!0;const t=this.state,s=e(this);return this.state=t,delete this._isolated,s}doSkipInvalid(e,t,s){return!!this.skipInvalid}doPrepare(e,t){return t===void 0&&(t={}),c.normalize(this.prepare?this.prepare(e,this,t):e)}doPrepareChar(e,t){return t===void 0&&(t={}),c.normalize(this.prepareChar?this.prepareChar(e,this,t):e)}doValidate(e){return(!this.validate||this.validate(this.value,this,e))&&(!this.parent||this.parent.doValidate(e))}doCommit(){this.commit&&this.commit(this.value,this)}splice(e,t,s,i,n){s===void 0&&(s=""),i===void 0&&(i=l.NONE),n===void 0&&(n={input:!0});const r=e+t,u=this.extractTail(r),o=this.eager===!0||this.eager==="remove";let h;o&&(i=Re(i),h=this.extractInput(0,r,{raw:!0}));let p=e;const f=new c;if(i!==l.NONE&&(p=this.nearestInputPos(e,t>1&&e!==0&&!o?l.NONE:i),f.tailShift=p-e),f.aggregate(this.remove(p)),o&&i!==l.NONE&&h===this.rawInputValue)if(i===l.FORCE_LEFT){let m;for(;h===this.rawInputValue&&(m=this.displayValue.length);)f.aggregate(new c({tailShift:-1})).aggregate(this.remove(m-1))}else i===l.FORCE_RIGHT&&u.unshift();return f.aggregate(this.append(s,n,u))}maskEquals(e){return this.mask===e}optionsIsChanged(e){return!D(this,e)}typedValueEquals(e){const t=this.typedValue;return e===t||g.EMPTY_VALUES.includes(e)&&g.EMPTY_VALUES.includes(t)||(this.format?this.format(e,this)===this.format(this.typedValue,this):!1)}pad(e){return new c}}g.DEFAULTS={skipInvalid:!0};g.EMPTY_VALUES=[void 0,null,""];d.Masked=g;class y{constructor(e,t){e===void 0&&(e=[]),t===void 0&&(t=0),this.chunks=e,this.from=t}toString(){return this.chunks.map(String).join("")}extend(e){if(!String(e))return;e=b(e)?new E(String(e)):e;const t=this.chunks[this.chunks.length-1],s=t&&(t.stop===e.stop||e.stop==null)&&e.from===t.from+t.toString().length;if(e instanceof E)s?t.extend(e.toString()):this.chunks.push(e);else if(e instanceof y){if(e.stop==null){let i;for(;e.chunks.length&&e.chunks[0].stop==null;)i=e.chunks.shift(),i.from+=e.from,this.extend(i)}e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}appendTo(e){if(!(e instanceof d.MaskedPattern))return new E(this.toString()).appendTo(e);const t=new c;for(let s=0;s<this.chunks.length;++s){const i=this.chunks[s],n=e._mapPosToBlock(e.displayValue.length),r=i.stop;let u;if(r!=null&&(!n||n.index<=r)&&((i instanceof y||e._stops.indexOf(r)>=0)&&t.aggregate(e._appendPlaceholder(r)),u=i instanceof y&&e._blocks[r]),u){const o=u.appendTail(i);t.aggregate(o);const h=i.toString().slice(o.rawInserted.length);h&&t.aggregate(e.append(h,{tail:!0}))}else t.aggregate(e.append(i.toString(),{tail:!0}))}return t}get state(){return{chunks:this.chunks.map(e=>e.state),from:this.from,stop:this.stop,blockIndex:this.blockIndex}}set state(e){const{chunks:t,...s}=e;Object.assign(this,s),this.chunks=t.map(i=>{const n="chunks"in i?new y:new E;return n.state=i,n})}unshift(e){if(!this.chunks.length||e!=null&&this.from>=e)return"";const t=e!=null?e-this.from:e;let s=0;for(;s<this.chunks.length;){const i=this.chunks[s],n=i.unshift(t);if(i.toString()){if(!n)break;++s}else this.chunks.splice(s,1);if(n)return n}return""}shift(){if(!this.chunks.length)return"";let e=this.chunks.length-1;for(;0<=e;){const t=this.chunks[e],s=t.shift();if(t.toString()){if(!s)break;--e}else this.chunks.splice(e,1);if(s)return s}return""}}class Ue{constructor(e,t){this.masked=e,this._log=[];const{offset:s,index:i}=e._mapPosToBlock(t)||(t<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0});this.offset=s,this.index=i,this.ok=!1}get block(){return this.masked._blocks[this.index]}get pos(){return this.masked._blockStartPos(this.index)+this.offset}get state(){return{index:this.index,offset:this.offset,ok:this.ok}}set state(e){Object.assign(this,e)}pushState(){this._log.push(this.state)}popState(){const e=this._log.pop();return e&&(this.state=e),e}bindBlock(){this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.displayValue.length))}_pushLeft(e){for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=((t=this.block)==null?void 0:t.displayValue.length)||0){var t;if(e())return this.ok=!0}return this.ok=!1}_pushRight(e){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(e())return this.ok=!0;return this.ok=!1}pushLeftBeforeFilled(){return this._pushLeft(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,l.FORCE_LEFT),this.offset!==0))return!0})}pushLeftBeforeInput(){return this._pushLeft(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,l.LEFT),!0})}pushLeftBeforeRequired(){return this._pushLeft(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,l.LEFT),!0})}pushRightBeforeFilled(){return this._pushRight(()=>{if(!(this.block.isFixed||!this.block.value)&&(this.offset=this.block.nearestInputPos(this.offset,l.FORCE_RIGHT),this.offset!==this.block.value.length))return!0})}pushRightBeforeInput(){return this._pushRight(()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,l.NONE),!0})}pushRightBeforeRequired(){return this._pushRight(()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,l.NONE),!0})}}class re{constructor(e){Object.assign(this,e),this._value="",this.isFixed=!0}get value(){return this._value}get unmaskedValue(){return this.isUnmasking?this.value:""}get rawInputValue(){return this._isRawInput?this.value:""}get displayValue(){return this.value}reset(){this._isRawInput=!1,this._value=""}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),this._value=this._value.slice(0,e)+this._value.slice(t),this._value||(this._isRawInput=!1),new c}nearestInputPos(e,t){t===void 0&&(t=l.NONE);const s=0,i=this._value.length;switch(t){case l.LEFT:case l.FORCE_LEFT:return s;case l.NONE:case l.RIGHT:case l.FORCE_RIGHT:default:return i}}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),this._isRawInput?t-e:0}extractInput(e,t,s){return e===void 0&&(e=0),t===void 0&&(t=this._value.length),s===void 0&&(s={}),s.raw&&this._isRawInput&&this._value.slice(e,t)||""}get isComplete(){return!0}get isFilled(){return!!this._value}_appendChar(e,t){if(t===void 0&&(t={}),this.isFilled)return new c;const s=this.eager===!0||this.eager==="append",n=this.char===e&&(this.isUnmasking||t.input||t.raw)&&(!t.raw||!s)&&!t.tail,r=new c({inserted:this.char,rawInserted:n?this.char:""});return this._value=this.char,this._isRawInput=n&&(t.raw||t.input),r}_appendEager(){return this._appendChar(this.char,{tail:!0})}_appendPlaceholder(){const e=new c;return this.isFilled||(this._value=e.inserted=this.char),e}extractTail(){return new E("")}appendTail(e){return b(e)&&(e=new E(String(e))),e.appendTo(this)}append(e,t,s){const i=this._appendChar(e[0],t);return s!=null&&(i.tailShift+=this.appendTail(s).tailShift),i}doCommit(){}get state(){return{_value:this._value,_rawInputValue:this.rawInputValue}}set state(e){this._value=e._value,this._isRawInput=!!e._rawInputValue}pad(e){return this._appendPlaceholder()}}class V{constructor(e){const{parent:t,isOptional:s,placeholderChar:i,displayChar:n,lazy:r,eager:u,...o}=e;this.masked=F(o),Object.assign(this,{parent:t,isOptional:s,placeholderChar:i,displayChar:n,lazy:r,eager:u})}reset(){this.isFilled=!1,this.masked.reset()}remove(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),e===0&&t>=1?(this.isFilled=!1,this.masked.remove(e,t)):new c}get value(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}get unmaskedValue(){return this.masked.unmaskedValue}get rawInputValue(){return this.masked.rawInputValue}get displayValue(){return this.masked.value&&this.displayChar||this.value}get isComplete(){return!!this.masked.value||this.isOptional}_appendChar(e,t){if(t===void 0&&(t={}),this.isFilled)return new c;const s=this.masked.state;let i=this.masked._appendChar(e,this.currentMaskFlags(t));return i.inserted&&this.doValidate(t)===!1&&(i=new c,this.masked.state=s),!i.inserted&&!this.isOptional&&!this.lazy&&!t.input&&(i.inserted=this.placeholderChar),i.skip=!i.inserted&&!this.isOptional,this.isFilled=!!i.inserted,i}append(e,t,s){return this.masked.append(e,this.currentMaskFlags(t),s)}_appendPlaceholder(){return this.isFilled||this.isOptional?new c:(this.isFilled=!0,new c({inserted:this.placeholderChar}))}_appendEager(){return new c}extractTail(e,t){return this.masked.extractTail(e,t)}appendTail(e){return this.masked.appendTail(e)}extractInput(e,t,s){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),this.masked.extractInput(e,t,s)}nearestInputPos(e,t){t===void 0&&(t=l.NONE);const s=0,i=this.value.length,n=Math.min(Math.max(e,s),i);switch(t){case l.LEFT:case l.FORCE_LEFT:return this.isComplete?n:s;case l.RIGHT:case l.FORCE_RIGHT:return this.isComplete?n:i;case l.NONE:default:return n}}totalInputPositions(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.value.length),this.value.slice(e,t).length}doValidate(e){return this.masked.doValidate(this.currentMaskFlags(e))&&(!this.parent||this.parent.doValidate(this.currentMaskFlags(e)))}doCommit(){this.masked.doCommit()}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue,masked:this.masked.state,isFilled:this.isFilled}}set state(e){this.masked.state=e.masked,this.isFilled=e.isFilled}currentMaskFlags(e){var t;return{...e,_beforeTailState:(e==null||(t=e._beforeTailState)==null?void 0:t.masked)||e?._beforeTailState}}pad(e){return new c}}V.DEFAULT_DEFINITIONS={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./};class Pe extends g{updateOptions(e){super.updateOptions(e)}_update(e){const t=e.mask;t&&(e.validate=s=>s.search(t)>=0),super._update(e)}}d.MaskedRegExp=Pe;class v extends g{constructor(e){super({...v.DEFAULTS,...e,definitions:Object.assign({},V.DEFAULT_DEFINITIONS,e?.definitions)})}updateOptions(e){super.updateOptions(e)}_update(e){e.definitions=Object.assign({},this.definitions,e.definitions),super._update(e),this._rebuildMask()}_rebuildMask(){const e=this.definitions;this._blocks=[],this.exposeBlock=void 0,this._stops=[],this._maskedBlocks={};const t=this.mask;if(!t||!e)return;let s=!1,i=!1;for(let n=0;n<t.length;++n){if(this.blocks){const h=t.slice(n),p=Object.keys(this.blocks).filter(m=>h.indexOf(m)===0);p.sort((m,S)=>S.length-m.length);const f=p[0];if(f){const{expose:m,repeat:S,...x}=w(this.blocks[f]),Y={lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,overwrite:this.overwrite,autofix:this.autofix,...x,repeat:S,parent:this},O=S!=null?new d.RepeatBlock(Y):F(Y);O&&(this._blocks.push(O),m&&(this.exposeBlock=O),this._maskedBlocks[f]||(this._maskedBlocks[f]=[]),this._maskedBlocks[f].push(this._blocks.length-1)),n+=f.length-1;continue}}let r=t[n],u=r in e;if(r===v.STOP_CHAR){this._stops.push(this._blocks.length);continue}if(r==="{"||r==="}"){s=!s;continue}if(r==="["||r==="]"){i=!i;continue}if(r===v.ESCAPE_CHAR){if(++n,r=t[n],!r)break;u=!1}const o=u?new V({isOptional:i,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,...w(e[r]),parent:this}):new re({char:r,eager:this.eager,isUnmasking:s});this._blocks.push(o)}}get state(){return{...super.state,_blocks:this._blocks.map(e=>e.state)}}set state(e){if(!e){this.reset();return}const{_blocks:t,...s}=e;this._blocks.forEach((i,n)=>i.state=t[n]),super.state=s}reset(){super.reset(),this._blocks.forEach(e=>e.reset())}get isComplete(){return this.exposeBlock?this.exposeBlock.isComplete:this._blocks.every(e=>e.isComplete)}get isFilled(){return this._blocks.every(e=>e.isFilled)}get isFixed(){return this._blocks.every(e=>e.isFixed)}get isOptional(){return this._blocks.every(e=>e.isOptional)}doCommit(){this._blocks.forEach(e=>e.doCommit()),super.doCommit()}get unmaskedValue(){return this.exposeBlock?this.exposeBlock.unmaskedValue:this._blocks.reduce((e,t)=>e+=t.unmaskedValue,"")}set unmaskedValue(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.unmaskedValue=e,this.appendTail(t),this.doCommit()}else super.unmaskedValue=e}get value(){return this.exposeBlock?this.exposeBlock.value:this._blocks.reduce((e,t)=>e+=t.value,"")}set value(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.value=e,this.appendTail(t),this.doCommit()}else super.value=e}get typedValue(){return this.exposeBlock?this.exposeBlock.typedValue:super.typedValue}set typedValue(e){if(this.exposeBlock){const t=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.typedValue=e,this.appendTail(t),this.doCommit()}else super.typedValue=e}get displayValue(){return this._blocks.reduce((e,t)=>e+=t.displayValue,"")}appendTail(e){return super.appendTail(e).aggregate(this._appendPlaceholder())}_appendEager(){var e;const t=new c;let s=(e=this._mapPosToBlock(this.displayValue.length))==null?void 0:e.index;if(s==null)return t;this._blocks[s].isFilled&&++s;for(let i=s;i<this._blocks.length;++i){const n=this._blocks[i]._appendEager();if(!n.inserted)break;t.aggregate(n)}return t}_appendCharRaw(e,t){t===void 0&&(t={});const s=this._mapPosToBlock(this.displayValue.length),i=new c;if(!s)return i;for(let r=s.index,u;u=this._blocks[r];++r){var n;const o=u._appendChar(e,{...t,_beforeTailState:(n=t._beforeTailState)==null||(n=n._blocks)==null?void 0:n[r]});if(i.aggregate(o),o.consumed)break}return i}extractTail(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const s=new y;return e===t||this._forEachBlocksInRange(e,t,(i,n,r,u)=>{const o=i.extractTail(r,u);o.stop=this._findStopBefore(n),o.from=this._blockStartPos(n),o instanceof y&&(o.blockIndex=n),s.extend(o)}),s}extractInput(e,t,s){if(e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),s===void 0&&(s={}),e===t)return"";let i="";return this._forEachBlocksInRange(e,t,(n,r,u,o)=>{i+=n.extractInput(u,o,s)}),i}_findStopBefore(e){let t;for(let s=0;s<this._stops.length;++s){const i=this._stops[s];if(i<=e)t=i;else break}return t}_appendPlaceholder(e){const t=new c;if(this.lazy&&e==null)return t;const s=this._mapPosToBlock(this.displayValue.length);if(!s)return t;const i=s.index,n=e??this._blocks.length;return this._blocks.slice(i,n).forEach(r=>{if(!r.lazy||e!=null){var u;t.aggregate(r._appendPlaceholder((u=r._blocks)==null?void 0:u.length))}}),t}_mapPosToBlock(e){let t="";for(let s=0;s<this._blocks.length;++s){const i=this._blocks[s],n=t.length;if(t+=i.displayValue,e<=t.length)return{index:s,offset:e-n}}}_blockStartPos(e){return this._blocks.slice(0,e).reduce((t,s)=>t+=s.displayValue.length,0)}_forEachBlocksInRange(e,t,s){t===void 0&&(t=this.displayValue.length);const i=this._mapPosToBlock(e);if(i){const n=this._mapPosToBlock(t),r=n&&i.index===n.index,u=i.offset,o=n&&r?n.offset:this._blocks[i.index].displayValue.length;if(s(this._blocks[i.index],i.index,u,o),n&&!r){for(let h=i.index+1;h<n.index;++h)s(this._blocks[h],h,0,this._blocks[h].displayValue.length);s(this._blocks[n.index],n.index,0,n.offset)}}}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const s=super.remove(e,t);return this._forEachBlocksInRange(e,t,(i,n,r,u)=>{s.aggregate(i.remove(r,u))}),s}nearestInputPos(e,t){if(t===void 0&&(t=l.NONE),!this._blocks.length)return 0;const s=new Ue(this,e);if(t===l.NONE)return s.pushRightBeforeInput()||(s.popState(),s.pushLeftBeforeInput())?s.pos:this.displayValue.length;if(t===l.LEFT||t===l.FORCE_LEFT){if(t===l.LEFT){if(s.pushRightBeforeFilled(),s.ok&&s.pos===e)return e;s.popState()}if(s.pushLeftBeforeInput(),s.pushLeftBeforeRequired(),s.pushLeftBeforeFilled(),t===l.LEFT){if(s.pushRightBeforeInput(),s.pushRightBeforeRequired(),s.ok&&s.pos<=e||(s.popState(),s.ok&&s.pos<=e))return s.pos;s.popState()}return s.ok?s.pos:t===l.FORCE_LEFT?0:(s.popState(),s.ok||(s.popState(),s.ok)?s.pos:0)}return t===l.RIGHT||t===l.FORCE_RIGHT?(s.pushRightBeforeInput(),s.pushRightBeforeRequired(),s.pushRightBeforeFilled()?s.pos:t===l.FORCE_RIGHT?this.displayValue.length:(s.popState(),s.ok||(s.popState(),s.ok)?s.pos:this.nearestInputPos(e,l.LEFT))):e}totalInputPositions(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);let s=0;return this._forEachBlocksInRange(e,t,(i,n,r,u)=>{s+=i.totalInputPositions(r,u)}),s}maskedBlock(e){return this.maskedBlocks(e)[0]}maskedBlocks(e){const t=this._maskedBlocks[e];return t?t.map(s=>this._blocks[s]):[]}pad(e){const t=new c;return this._forEachBlocksInRange(0,this.displayValue.length,s=>t.aggregate(s.pad(e))),t}}v.DEFAULTS={...g.DEFAULTS,lazy:!0,placeholderChar:"_"};v.STOP_CHAR="`";v.ESCAPE_CHAR="\\";v.InputDefinition=V;v.FixedDefinition=re;d.MaskedPattern=v;class I extends v{get _matchFrom(){return this.maxLength-String(this.from).length}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){const{to:t=this.to||0,from:s=this.from||0,maxLength:i=this.maxLength||0,autofix:n=this.autofix,...r}=e;this.to=t,this.from=s,this.maxLength=Math.max(String(t).length,i),this.autofix=n;const u=String(this.from).padStart(this.maxLength,"0"),o=String(this.to).padStart(this.maxLength,"0");let h=0;for(;h<o.length&&o[h]===u[h];)++h;r.mask=o.slice(0,h).replace(/0/g,"\\0")+"0".repeat(this.maxLength-h),super._update(r)}get isComplete(){return super.isComplete&&!!this.value}boundaries(e){let t="",s="";const[,i,n]=e.match(/^(\D*)(\d*)(\D*)/)||[];return n&&(t="0".repeat(i.length)+n,s="9".repeat(i.length)+n),t=t.padEnd(this.maxLength,"0"),s=s.padEnd(this.maxLength,"9"),[t,s]}doPrepareChar(e,t){t===void 0&&(t={});let s;return[e,s]=super.doPrepareChar(e.replace(/\D/g,""),t),e||(s.skip=!this.isComplete),[e,s]}_appendCharRaw(e,t){if(t===void 0&&(t={}),!this.autofix||this.value.length+1>this.maxLength)return super._appendCharRaw(e,t);const s=String(this.from).padStart(this.maxLength,"0"),i=String(this.to).padStart(this.maxLength,"0"),[n,r]=this.boundaries(this.value+e);return Number(r)<this.from?super._appendCharRaw(s[this.value.length],t):Number(n)>this.to?!t.tail&&this.autofix==="pad"&&this.value.length+1<this.maxLength?super._appendCharRaw(s[this.value.length],t).aggregate(this._appendCharRaw(e,t)):super._appendCharRaw(i[this.value.length],t):super._appendCharRaw(e,t)}doValidate(e){const t=this.value;if(t.search(/[^0]/)===-1&&t.length<=this._matchFrom)return!0;const[i,n]=this.boundaries(t);return this.from<=Number(n)&&Number(i)<=this.to&&super.doValidate(e)}pad(e){const t=new c;if(this.value.length===this.maxLength)return t;const s=this.value,i=this.maxLength-this.value.length;if(i){this.reset();for(let n=0;n<i;++n)t.aggregate(super._appendCharRaw("0",e));s.split("").forEach(n=>this._appendCharRaw(n))}return t}}d.MaskedRange=I;const $e="d{.}`m{.}`Y";class A extends v{static extractPatternOptions(e){const{mask:t,pattern:s,...i}=e;return{...i,mask:b(t)?t:s}}constructor(e){super(A.extractPatternOptions({...A.DEFAULTS,...e}))}updateOptions(e){super.updateOptions(e)}_update(e){const{mask:t,pattern:s,blocks:i,...n}={...A.DEFAULTS,...e},r=Object.assign({},A.GET_DEFAULT_BLOCKS());e.min&&(r.Y.from=e.min.getFullYear()),e.max&&(r.Y.to=e.max.getFullYear()),e.min&&e.max&&r.Y.from===r.Y.to&&(r.m.from=e.min.getMonth()+1,r.m.to=e.max.getMonth()+1,r.m.from===r.m.to&&(r.d.from=e.min.getDate(),r.d.to=e.max.getDate())),Object.assign(r,this.blocks,i),super._update({...n,mask:b(t)?t:s,blocks:r})}doValidate(e){const t=this.date;return super.doValidate(e)&&(!this.isComplete||this.isDateExist(this.value)&&t!=null&&(this.min==null||this.min<=t)&&(this.max==null||t<=this.max))}isDateExist(e){return this.format(this.parse(e,this),this).indexOf(e)>=0}get date(){return this.typedValue}set date(e){this.typedValue=e}get typedValue(){return this.isComplete?super.typedValue:null}set typedValue(e){super.typedValue=e}maskEquals(e){return e===Date||super.maskEquals(e)}optionsIsChanged(e){return super.optionsIsChanged(A.extractPatternOptions(e))}}A.GET_DEFAULT_BLOCKS=()=>({d:{mask:I,from:1,to:31,maxLength:2},m:{mask:I,from:1,to:12,maxLength:2},Y:{mask:I,from:1900,to:9999}});A.DEFAULTS={...v.DEFAULTS,mask:Date,pattern:$e,format:(a,e)=>{if(!a)return"";const t=String(a.getDate()).padStart(2,"0"),s=String(a.getMonth()+1).padStart(2,"0"),i=a.getFullYear();return[t,s,i].join(".")},parse:(a,e)=>{const[t,s,i]=a.split(".").map(Number);return new Date(i,s-1,t)}};d.MaskedDate=A;class R extends g{constructor(e){super({...R.DEFAULTS,...e}),this.currentMask=void 0}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),"mask"in e&&(this.exposeMask=void 0,this.compiledMasks=Array.isArray(e.mask)?e.mask.map(t=>{const{expose:s,...i}=w(t),n=F({overwrite:this._overwrite,eager:this._eager,skipInvalid:this._skipInvalid,...i});return s&&(this.exposeMask=n),n}):[])}_appendCharRaw(e,t){t===void 0&&(t={});const s=this._applyDispatch(e,t);return this.currentMask&&s.aggregate(this.currentMask._appendChar(e,this.currentMaskFlags(t))),s}_applyDispatch(e,t,s){e===void 0&&(e=""),t===void 0&&(t={}),s===void 0&&(s="");const i=t.tail&&t._beforeTailState!=null?t._beforeTailState._value:this.value,n=this.rawInputValue,r=t.tail&&t._beforeTailState!=null?t._beforeTailState._rawInputValue:n,u=n.slice(r.length),o=this.currentMask,h=new c,p=o?.state;return this.currentMask=this.doDispatch(e,{...t},s),this.currentMask&&(this.currentMask!==o?(this.currentMask.reset(),r&&(this.currentMask.append(r,{raw:!0}),h.tailShift=this.currentMask.value.length-i.length),u&&(h.tailShift+=this.currentMask.append(u,{raw:!0,tail:!0}).tailShift)):p&&(this.currentMask.state=p)),h}_appendPlaceholder(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendPlaceholder()),e}_appendEager(){const e=this._applyDispatch();return this.currentMask&&e.aggregate(this.currentMask._appendEager()),e}appendTail(e){const t=new c;return e&&t.aggregate(this._applyDispatch("",{},e)),t.aggregate(this.currentMask?this.currentMask.appendTail(e):super.appendTail(e))}currentMaskFlags(e){var t,s;return{...e,_beforeTailState:((t=e._beforeTailState)==null?void 0:t.currentMaskRef)===this.currentMask&&((s=e._beforeTailState)==null?void 0:s.currentMask)||e._beforeTailState}}doDispatch(e,t,s){return t===void 0&&(t={}),s===void 0&&(s=""),this.dispatch(e,this,t,s)}doValidate(e){return super.doValidate(e)&&(!this.currentMask||this.currentMask.doValidate(this.currentMaskFlags(e)))}doPrepare(e,t){t===void 0&&(t={});let[s,i]=super.doPrepare(e,t);if(this.currentMask){let n;[s,n]=super.doPrepare(s,this.currentMaskFlags(t)),i=i.aggregate(n)}return[s,i]}doPrepareChar(e,t){t===void 0&&(t={});let[s,i]=super.doPrepareChar(e,t);if(this.currentMask){let n;[s,n]=super.doPrepareChar(s,this.currentMaskFlags(t)),i=i.aggregate(n)}return[s,i]}reset(){var e;(e=this.currentMask)==null||e.reset(),this.compiledMasks.forEach(t=>t.reset())}get value(){return this.exposeMask?this.exposeMask.value:this.currentMask?this.currentMask.value:""}set value(e){this.exposeMask?(this.exposeMask.value=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.value=e}get unmaskedValue(){return this.exposeMask?this.exposeMask.unmaskedValue:this.currentMask?this.currentMask.unmaskedValue:""}set unmaskedValue(e){this.exposeMask?(this.exposeMask.unmaskedValue=e,this.currentMask=this.exposeMask,this._applyDispatch()):super.unmaskedValue=e}get typedValue(){return this.exposeMask?this.exposeMask.typedValue:this.currentMask?this.currentMask.typedValue:""}set typedValue(e){if(this.exposeMask){this.exposeMask.typedValue=e,this.currentMask=this.exposeMask,this._applyDispatch();return}let t=String(e);this.currentMask&&(this.currentMask.typedValue=e,t=this.currentMask.unmaskedValue),this.unmaskedValue=t}get displayValue(){return this.currentMask?this.currentMask.displayValue:""}get isComplete(){var e;return!!((e=this.currentMask)!=null&&e.isComplete)}get isFilled(){var e;return!!((e=this.currentMask)!=null&&e.isFilled)}remove(e,t){const s=new c;return this.currentMask&&s.aggregate(this.currentMask.remove(e,t)).aggregate(this._applyDispatch()),s}get state(){var e;return{...super.state,_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map(t=>t.state),currentMaskRef:this.currentMask,currentMask:(e=this.currentMask)==null?void 0:e.state}}set state(e){const{compiledMasks:t,currentMaskRef:s,currentMask:i,...n}=e;t&&this.compiledMasks.forEach((r,u)=>r.state=t[u]),s!=null&&(this.currentMask=s,this.currentMask.state=i),super.state=n}extractInput(e,t,s){return this.currentMask?this.currentMask.extractInput(e,t,s):""}extractTail(e,t){return this.currentMask?this.currentMask.extractTail(e,t):super.extractTail(e,t)}doCommit(){this.currentMask&&this.currentMask.doCommit(),super.doCommit()}nearestInputPos(e,t){return this.currentMask?this.currentMask.nearestInputPos(e,t):super.nearestInputPos(e,t)}get overwrite(){return this.currentMask?this.currentMask.overwrite:this._overwrite}set overwrite(e){this._overwrite=e}get eager(){return this.currentMask?this.currentMask.eager:this._eager}set eager(e){this._eager=e}get skipInvalid(){return this.currentMask?this.currentMask.skipInvalid:this._skipInvalid}set skipInvalid(e){this._skipInvalid=e}get autofix(){return this.currentMask?this.currentMask.autofix:this._autofix}set autofix(e){this._autofix=e}maskEquals(e){return Array.isArray(e)?this.compiledMasks.every((t,s)=>{if(!e[s])return;const{mask:i,...n}=e[s];return D(t,n)&&t.maskEquals(i)}):super.maskEquals(e)}typedValueEquals(e){var t;return!!((t=this.currentMask)!=null&&t.typedValueEquals(e))}}R.DEFAULTS={...g.DEFAULTS,dispatch:(a,e,t,s)=>{if(!e.compiledMasks.length)return;const i=e.rawInputValue,n=e.compiledMasks.map((r,u)=>{const o=e.currentMask===r,h=o?r.displayValue.length:r.nearestInputPos(r.displayValue.length,l.FORCE_LEFT);return r.rawInputValue!==i?(r.reset(),r.append(i,{raw:!0})):o||r.remove(h),r.append(a,e.currentMaskFlags(t)),r.appendTail(s),{index:u,weight:r.rawInputValue.length,totalInputPositions:r.totalInputPositions(0,Math.max(h,r.nearestInputPos(r.displayValue.length,l.FORCE_LEFT)))}});return n.sort((r,u)=>u.weight-r.weight||u.totalInputPositions-r.totalInputPositions),e.compiledMasks[n[0].index]}};d.MaskedDynamic=R;class L extends v{constructor(e){super({...L.DEFAULTS,...e})}updateOptions(e){super.updateOptions(e)}_update(e){const{enum:t,...s}=e;if(t){const i=t.map(u=>u.length),n=Math.min(...i),r=Math.max(...i)-n;s.mask="*".repeat(n),r&&(s.mask+="["+"*".repeat(r)+"]"),this.enum=t}super._update(s)}_appendCharRaw(e,t){t===void 0&&(t={});const s=Math.min(this.nearestInputPos(0,l.FORCE_RIGHT),this.value.length),i=this.enum.filter(n=>this.matchValue(n,this.unmaskedValue+e,s));if(i.length){i.length===1&&this._forEachBlocksInRange(0,this.value.length,(r,u)=>{const o=i[0][u];u>=this.value.length||o===r.value||(r.reset(),r._appendChar(o,t))});const n=super._appendCharRaw(i[0][this.value.length],t);return i.length===1&&i[0].slice(this.unmaskedValue.length).split("").forEach(r=>n.aggregate(super._appendCharRaw(r))),n}return new c({skip:!this.isComplete})}extractTail(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),new E("",e)}remove(e,t){if(e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),e===t)return new c;const s=Math.min(super.nearestInputPos(0,l.FORCE_RIGHT),this.value.length);let i;for(i=e;i>=0&&!(this.enum.filter(u=>this.matchValue(u,this.value.slice(s,i),s)).length>1);--i);const n=super.remove(i,t);return n.tailShift+=i-e,n}get isComplete(){return this.enum.indexOf(this.value)>=0}}L.DEFAULTS={...v.DEFAULTS,matchValue:(a,e,t)=>a.indexOf(e,t)===t};d.MaskedEnum=L;class je extends g{updateOptions(e){super.updateOptions(e)}_update(e){super._update({...e,validate:e.mask})}}d.MaskedFunction=je;var ue;class k extends g{constructor(e){super({...k.DEFAULTS,...e})}updateOptions(e){super.updateOptions(e)}_update(e){super._update(e),this._updateRegExps()}_updateRegExps(){const e="^"+(this.allowNegative?"[+|\\-]?":""),t="\\d*",s=(this.scale?"("+N(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExp=new RegExp(e+t+s),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(N).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(N(this.thousandsSeparator),"g")}_removeThousandsSeparators(e){return e.replace(this._thousandsSeparatorRegExp,"")}_insertThousandsSeparators(e){const t=e.split(this.radix);return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),t.join(this.radix)}doPrepareChar(e,t){t===void 0&&(t={});const[s,i]=super.doPrepareChar(this._removeThousandsSeparators(this.scale&&this.mapToRadix.length&&(t.input&&t.raw||!t.input&&!t.raw)?e.replace(this._mapToRadixRegExp,this.radix):e),t);return e&&!s&&(i.skip=!0),s&&!this.allowPositive&&!this.value&&s!=="-"&&i.aggregate(this._appendChar("-")),[s,i]}_separatorsCount(e,t){t===void 0&&(t=!1);let s=0;for(let i=0;i<e;++i)this._value.indexOf(this.thousandsSeparator,i)===i&&(++s,t&&(e+=this.thousandsSeparator.length));return s}_separatorsCountFromSlice(e){return e===void 0&&(e=this._value),this._separatorsCount(this._removeThousandsSeparators(e).length,!0)}extractInput(e,t,s){return e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),[e,t]=this._adjustRangeWithSeparators(e,t),this._removeThousandsSeparators(super.extractInput(e,t,s))}_appendCharRaw(e,t){t===void 0&&(t={});const s=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,i=this._separatorsCountFromSlice(s);this._value=this._removeThousandsSeparators(this.value);const n=this._value;this._value+=e;const r=this.number;let u=!isNaN(r),o=!1;if(u){let m;this.min!=null&&this.min<0&&this.number<this.min&&(m=this.min),this.max!=null&&this.max>0&&this.number>this.max&&(m=this.max),m!=null&&(this.autofix?(this._value=this.format(m,this).replace(k.UNMASKED_RADIX,this.radix),o||(o=n===this._value&&!t.tail)):u=!1),u&&(u=!!this._value.match(this._numberRegExp))}let h;u?h=new c({inserted:this._value.slice(n.length),rawInserted:o?"":e,skip:o}):(this._value=n,h=new c),this._value=this._insertThousandsSeparators(this._value);const p=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,f=this._separatorsCountFromSlice(p);return h.tailShift+=(f-i)*this.thousandsSeparator.length,h}_findSeparatorAround(e){if(this.thousandsSeparator){const t=e-this.thousandsSeparator.length+1,s=this.value.indexOf(this.thousandsSeparator,t);if(s<=e)return s}return-1}_adjustRangeWithSeparators(e,t){const s=this._findSeparatorAround(e);s>=0&&(e=s);const i=this._findSeparatorAround(t);return i>=0&&(t=i+this.thousandsSeparator.length),[e,t]}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length),[e,t]=this._adjustRangeWithSeparators(e,t);const s=this.value.slice(0,e),i=this.value.slice(t),n=this._separatorsCount(s.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(s+i));const r=this._separatorsCountFromSlice(s);return new c({tailShift:(r-n)*this.thousandsSeparator.length})}nearestInputPos(e,t){if(!this.thousandsSeparator)return e;switch(t){case l.NONE:case l.LEFT:case l.FORCE_LEFT:{const s=this._findSeparatorAround(e-1);if(s>=0){const i=s+this.thousandsSeparator.length;if(e<i||this.value.length<=i||t===l.FORCE_LEFT)return s}break}case l.RIGHT:case l.FORCE_RIGHT:{const s=this._findSeparatorAround(e);if(s>=0)return s+this.thousandsSeparator.length}}return e}doCommit(){if(this.value){const e=this.number;let t=e;this.min!=null&&(t=Math.max(t,this.min)),this.max!=null&&(t=Math.min(t,this.max)),t!==e&&(this.unmaskedValue=this.format(t,this));let s=this.value;this.normalizeZeros&&(s=this._normalizeZeros(s)),this.padFractionalZeros&&this.scale>0&&(s=this._padFractionalZeros(s)),this._value=s}super.doCommit()}_normalizeZeros(e){const t=this._removeThousandsSeparators(e).split(this.radix);return t[0]=t[0].replace(/^(\D*)(0*)(\d*)/,(s,i,n,r)=>i+r),e.length&&!/\d$/.test(t[0])&&(t[0]=t[0]+"0"),t.length>1&&(t[1]=t[1].replace(/0*$/,""),t[1].length||(t.length=1)),this._insertThousandsSeparators(t.join(this.radix))}_padFractionalZeros(e){if(!e)return e;const t=e.split(this.radix);return t.length<2&&t.push(""),t[1]=t[1].padEnd(this.scale,"0"),t.join(this.radix)}doSkipInvalid(e,t,s){t===void 0&&(t={});const i=this.scale===0&&e!==this.thousandsSeparator&&(e===this.radix||e===k.UNMASKED_RADIX||this.mapToRadix.includes(e));return super.doSkipInvalid(e,t,s)&&!i}get unmaskedValue(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,k.UNMASKED_RADIX)}set unmaskedValue(e){super.unmaskedValue=e}get typedValue(){return this.parse(this.unmaskedValue,this)}set typedValue(e){this.rawInputValue=this.format(e,this).replace(k.UNMASKED_RADIX,this.radix)}get number(){return this.typedValue}set number(e){this.typedValue=e}get allowNegative(){return this.min!=null&&this.min<0||this.max!=null&&this.max<0}get allowPositive(){return this.min!=null&&this.min>0||this.max!=null&&this.max>0}typedValueEquals(e){return(super.typedValueEquals(e)||k.EMPTY_VALUES.includes(e)&&k.EMPTY_VALUES.includes(this.typedValue))&&!(e===0&&this.value==="")}}ue=k;k.UNMASKED_RADIX=".";k.EMPTY_VALUES=[...g.EMPTY_VALUES,0];k.DEFAULTS={...g.DEFAULTS,mask:Number,radix:",",thousandsSeparator:"",mapToRadix:[ue.UNMASKED_RADIX],min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,scale:2,normalizeZeros:!0,padFractionalZeros:!1,parse:Number,format:a=>a.toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:20})};d.MaskedNumber=k;const j={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function oe(a,e,t){e===void 0&&(e=j.MASKED),t===void 0&&(t=j.MASKED);const s=F(a);return i=>s.runIsolated(n=>(n[e]=i,n[t]))}function He(a,e,t,s){return oe(e,t,s)(a)}d.PIPE_TYPE=j;d.createPipe=oe;d.pipe=He;class ze extends v{get repeatFrom(){var e;return(e=Array.isArray(this.repeat)?this.repeat[0]:this.repeat===1/0?0:this.repeat)!=null?e:0}get repeatTo(){var e;return(e=Array.isArray(this.repeat)?this.repeat[1]:this.repeat)!=null?e:1/0}constructor(e){super(e)}updateOptions(e){super.updateOptions(e)}_update(e){var t,s,i;const{repeat:n,...r}=w(e);this._blockOpts=Object.assign({},this._blockOpts,r);const u=F(this._blockOpts);this.repeat=(t=(s=n??u.repeat)!=null?s:this.repeat)!=null?t:1/0,super._update({mask:"m".repeat(Math.max(this.repeatTo===1/0&&((i=this._blocks)==null?void 0:i.length)||0,this.repeatFrom)),blocks:{m:u},eager:u.eager,overwrite:u.overwrite,skipInvalid:u.skipInvalid,lazy:u.lazy,placeholderChar:u.placeholderChar,displayChar:u.displayChar})}_allocateBlock(e){if(e<this._blocks.length)return this._blocks[e];if(this.repeatTo===1/0||this._blocks.length<this.repeatTo)return this._blocks.push(F(this._blockOpts)),this.mask+="m",this._blocks[this._blocks.length-1]}_appendCharRaw(e,t){t===void 0&&(t={});const s=new c;for(let o=(i=(n=this._mapPosToBlock(this.displayValue.length))==null?void 0:n.index)!=null?i:Math.max(this._blocks.length-1,0),h,p;h=(r=this._blocks[o])!=null?r:p=!p&&this._allocateBlock(o);++o){var i,n,r,u;const f=h._appendChar(e,{...t,_beforeTailState:(u=t._beforeTailState)==null||(u=u._blocks)==null?void 0:u[o]});if(f.skip&&p){this._blocks.pop(),this.mask=this.mask.slice(1);break}if(s.aggregate(f),f.consumed)break}return s}_trimEmptyTail(e,t){var s,i;e===void 0&&(e=0);const n=Math.max(((s=this._mapPosToBlock(e))==null?void 0:s.index)||0,this.repeatFrom,0);let r;t!=null&&(r=(i=this._mapPosToBlock(t))==null?void 0:i.index),r==null&&(r=this._blocks.length-1);let u=0;for(let o=r;n<=o&&!this._blocks[o].unmaskedValue;--o,++u);u&&(this._blocks.splice(r-u+1,u),this.mask=this.mask.slice(u))}reset(){super.reset(),this._trimEmptyTail()}remove(e,t){e===void 0&&(e=0),t===void 0&&(t=this.displayValue.length);const s=super.remove(e,t);return this._trimEmptyTail(e,t),s}totalInputPositions(e,t){return e===void 0&&(e=0),t==null&&this.repeatTo===1/0?1/0:super.totalInputPositions(e,t)}get state(){return super.state}set state(e){this._blocks.length=e._blocks.length,this.mask=this.mask.slice(0,this._blocks.length),super.state=e}}d.RepeatBlock=ze;try{globalThis.IMask=d}catch{}function K(a){return a.replace(/\D/g,"")}function Ge(a){let e=K(a).slice(0,11);return e=e.replace(/(\d{3})(\d)/,"$1.$2"),e=e.replace(/(\d{3})(\d)/,"$1.$2"),e=e.replace(/(\d{3})(\d{1,2})$/,"$1-$2"),e}function Ke(a){let e=K(a).slice(0,11);return e=e.replace(/^(\d{2})(\d)/,"($1) $2"),e=e.replace(/(\d{5})(\d{1,4})$/,"$1-$2"),e}function Ye(a){let e=K(a).slice(0,8);return e=e.replace(/(\d{5})(\d)/,"$1-$2"),e}function q(a,e){a&&a.addEventListener("input",()=>{a.value=e(a.value)})}function Ze(){const a=document.querySelector("#cpf"),e=document.querySelector("#telefone"),t=document.querySelector("#cep");!a||!e||!t||(d(a,{mask:"000.000.000-00"}),d(e,{mask:"(00) 00000-0000"}),d(t,{mask:"00000-000"}),console.warn("IMask não carregou. Usando máscaras locais."),q(a,Ge),q(e,Ke),q(t,Ye))}let J;function Xe(){Je(),We(),Qe()}function Je(){const a=document.querySelector("#menu-toggle"),e=document.querySelector("#main-nav");!a||!e||(a.addEventListener("click",()=>{const t=e.classList.toggle("is-open");a.setAttribute("aria-expanded",String(t))}),e.addEventListener("click",t=>{t.target.closest("[data-route]")&&(e.classList.remove("is-open"),a.setAttribute("aria-expanded","false"))}))}function We(){const a=document.querySelector("#participar-dropdown"),e=document.querySelector("#participar-toggle");!a||!e||e.addEventListener("click",()=>{const t=a.classList.toggle("is-open");e.setAttribute("aria-expanded",String(t))})}function Qe(){const a=document.querySelector("#toast-close");a&&a.addEventListener("click",le)}function H(a,e="success"){const t=document.querySelector("#toast"),s=document.querySelector("#toast-title"),i=document.querySelector("#toast-message"),n=document.querySelector("#toast-icon");if(!t||!s||!i||!n){console.error("Elementos do toast não encontrados.");return}clearTimeout(J),t.classList.remove("toast-success","toast-error","toast-info");const r={success:{title:"Sucesso",icon:"✓"},error:{title:"Erro",icon:"!"},info:{title:"Informação",icon:"i"}},u=r[e]??r.info;t.classList.add(`toast-${e}`,"show"),s.textContent=u.title,n.textContent=u.icon,i.textContent=a,J=setTimeout(le,5e3)}function le(){const a=document.querySelector("#toast");a&&a.classList.remove("show")}function et({title:a="Confirmar ação",message:e="Deseja continuar?",confirmText:t="Confirmar"}={}){const s=document.querySelector("#confirm-modal"),i=document.querySelector("#modal-title"),n=document.querySelector("#modal-message"),r=document.querySelector("#modal-confirm"),u=document.querySelector("#modal-cancel");return!s||!i||!n||!r||!u?(console.error("Elementos do modal não encontrados."),Promise.resolve(!1)):(i.textContent=a,n.textContent=e,r.textContent=t,s.hidden=!1,document.body.classList.add("modal-open"),r.focus(),new Promise(o=>{function h(x){s.hidden=!0,document.body.classList.remove("modal-open"),r.removeEventListener("click",p),u.removeEventListener("click",f),s.removeEventListener("click",m),document.removeEventListener("keydown",S),o(x)}function p(){h(!0)}function f(){h(!1)}function m(x){x.target===s&&h(!1)}function S(x){x.key==="Escape"&&h(!1)}r.addEventListener("click",p),u.addEventListener("click",f),s.addEventListener("click",m),document.addEventListener("keydown",S)}))}const B=document.querySelector("#app");function tt(a){document.querySelectorAll("[data-route]").forEach(e=>{e.dataset.route===a?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}function he(a){switch(tt(a),a){case"home":B.innerHTML=_e();break;case"projetos":B.innerHTML=Ee();break;case"cadastro":B.innerHTML=Ce(),st();break;case"voluntarios":B.innerHTML=Ae(z()),it();break;default:B.innerHTML=Fe()}B.focus({preventScroll:!0}),window.scrollTo({top:0,behavior:"smooth"})}function st(){const a=document.querySelector("#volunteer-form");a&&(Ze(),Me(a),a.addEventListener("submit",e=>{if(e.preventDefault(),!Te(a)){H("Corrija os campos destacados antes de continuar.","error");return}const t=new FormData(a),s={nome:t.get("nome").trim(),cpf:t.get("cpf").trim(),nascimento:t.get("nascimento"),email:t.get("email").trim(),telefone:t.get("telefone").trim(),cep:t.get("cep").trim(),endereco:t.get("endereco").trim(),cidade:t.get("cidade").trim(),estado:t.get("estado"),area:t.get("area"),mensagem:t.get("mensagem")?.trim()??""};be(s),H("Cadastro realizado e armazenado no navegador.","success"),Q("voluntarios")}))}function it(){document.querySelectorAll("[data-delete-volunteer]").forEach(e=>{e.addEventListener("click",async()=>{const t=e.dataset.deleteVolunteer;await et({title:"Excluir voluntário",message:"Tem certeza de que deseja excluir este cadastro?",confirmText:"Excluir"})&&(Se(t),H("Cadastro removido com sucesso.","success"),he("voluntarios"))})})}document.addEventListener("DOMContentLoaded",()=>{Xe(),ce(he)});
