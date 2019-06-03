(function() {

    function mainPreloaderFunc() {
        document.body.onload = function() {
            setTimeout(function() {
                const preloader = document.getElementById('page-reloader');
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done')
                }
            }, 1000);
        }
    }

    function mainModalFunc() {
        const mainModalBtn = document.querySelector('.burger-menu')
        const mainModal = document.querySelector('.main-modal')
        const mainmModaContent = document.querySelector('.main-modal__content')
        const mainModalCloseBtn = document.querySelector('.main-modal__close')
        const mainModaInsideLinks = document.querySelectorAll('.main-modal__content_link')


        function addMainModalClass() {
            mainModal.classList.add('main-modal_active')
            mainModal.style = ''

            const timer = setTimeout(function showUpAnimation() {
                mainmModaContent.classList.add('main-modal__content_active')
                mainModalCloseBtn.classList.add('main-modal__close_active')
            }, 1000);
        }

        function removeMainModal() {
            mainModal.style.transform = 'translateY(-200%)'

        }

        mainModalBtn.addEventListener('click', () => {
            addMainModalClass()
        })

        mainModalCloseBtn.addEventListener('click', () => {
            removeMainModal()
        })

        mainModaInsideLinks.forEach(function(item, i, arr) {
            item.addEventListener('click', () => {
                removeMainModal()
            })
        })
    }

    function gitModalFunc() {
        const gitModalOpenButt = document.querySelector('.git-butt')
        const gitModal = document.querySelector('.git')
        const gitModalCloseButt = document.querySelector('.git__close-btn')

        gitModalOpenButt.addEventListener('click', () => {
            gitModal.classList.remove('git_active', 'animated', 'fadeOutUp');
            gitModal.classList.add('git_active', 'animated', 'fadeInRight');
        })

        function doAfterGitAnimation() {
            gitModalCloseButt.addEventListener('click', () => {
                gitModal.classList.remove('animated', 'fadeInRight');
                gitModal.classList.add('animated', 'fadeOutUp');
            })
        }

        gitModal.addEventListener('animationend', function() {
            doAfterGitAnimation()
        })
    }

    function mapModalFunc() {
        const modalBlock = document.querySelector('.map-modal');
        const openModal = document.querySelector('.footer-contact__location');
        const closeModal = modalBlock.querySelector('.map-modal__close');

        openModal.addEventListener('click', () => {
            modalBlock.classList.remove('map-modal_active', 'animated', 'fadeOutUp');
            modalBlock.classList.add('map-modal_active', 'animated', 'fadeInLeft');
        })

        function doAfterMapAnimation() {
            closeModal.addEventListener('click', () => {
                modalBlock.classList.remove('animated', 'fadeInLeft');
                modalBlock.classList.add('animated', 'fadeOutUp');
            })
        }

        modalBlock.addEventListener('animationend', function() {
            doAfterMapAnimation()
        })
    }

    function formModalFunc() {
        const formBlock = document.querySelector('.form-modal');
        const openForm = document.querySelector('.footer-contact__btn');
        const closeForm = document.querySelector('.postcard_close');

        openForm.addEventListener('click', () => {
            formBlock.classList.remove('form-modal_active', 'animated', 'fadeOutDown');
            formBlock.classList.add('form-modal_active', 'animated', 'fadeInRight');
        })

        function doAfterFormANimation() {
            closeForm.addEventListener('click', () => {
                formBlock.classList.remove('animated', 'fadeInRight');
                formBlock.classList.add('animated', 'fadeOutDown');
            })
        }

        formBlock.addEventListener('animationend', function() {
            doAfterFormANimation()
        })
    }

    function formValidateFunc() {
        const formSubmitBtn = document.querySelector('.form-row__submit')
        const postcardForm = document.querySelector('.postcard')
        const formIpt = document.querySelectorAll('.form-row__inp')
        const formLb = document.querySelectorAll('.form-row__lb')
        const resetFormButt = document.querySelector('.form-row__reset')

        formSubmitBtn.addEventListener('click', (evt) => {
            formIpt.forEach(function(item, i, arr) {
                if (item.value === '') {


                    postcardForm.classList.add('animated', 'shake');
                    item.classList.add('form-row__inp_wrong')
                    formBlock.addEventListener('animationend', () => {
                        postcardForm.classList.remove('animated', 'shake')
                    })
                } else {

                }
            });
        })

        resetFormButt.addEventListener('click', () => {
            formIpt.forEach(function(item, i, arr) {
                if (item.classList.contains('form-row__inp_wrong')) {
                    item.classList.remove('form-row__inp_wrong')
                }
            });
        });
    }

    function skillsModalFunc() {
        const skillsModalOpenButt = document.querySelector('.workflow-info__p q')
        const skillsModal = document.querySelector('.skills')
        const skillsModalCloseButt = document.querySelector('.skills__butt')

        skillsModalOpenButt.addEventListener('click', () => {
            skillsModal.classList.remove('skills_active', 'animated', 'fadeOutUp');
            skillsModal.classList.add('skills_active', 'animated', 'fadeInRight');
        })

        function doAfterSkillsAnimation() {
            skillsModalCloseButt.addEventListener('click', () => {
                skillsModal.classList.remove('animated', 'fadeInRight');
                skillsModal.classList.add('animated', 'fadeOutUp');
            })
        }

        skillsModal.addEventListener('animationend', function() {
            doAfterSkillsAnimation()
        })
    }

    function portfolioSliderFunc() {
        const sliderBtnLeft = document.querySelector('.portfolio-btn_left')
        const sliderBtnRight = document.querySelector('.portfolio-btn_right')
        const slider = document.querySelector('.work__img')
        const sliderName = document.querySelector('.work__info-title')
        const sliderIndexHtml = document.querySelector('.work-info__text_pages span')
        const sliderCiteHtml = document.querySelector('.work__info-cite')
        const sliderLinkHtml = document.querySelector('.work__info-title')

        const sliderAnimationVars = [
            slider,
            sliderName,
            sliderIndexHtml,
            sliderCiteHtml
        ]

        const sliderImages = [
            'img/mouse.jpg',
            'img/sedona.jpg',
            'img/tesla.jpg',
            'img/loco.jpg'
        ]

        const sliderNames = [
            'Catch mice',
            'Sedona',
            'Tesla',
            'Loco'
        ]

        const sliderLinks = [
            'https://webheroschool.github.io/fristyr-js-game/',
            'https://fristyr.github.io/fristyr-sedona/',
            'https://webheroschool.github.io/tesla-fristyr/',
            'https://webheroschool.github.io/loco/'
        ]

        const sliderCite = [
            'Try to catch the mouse, simple js game',
            'Sedona - my first simple HTML CSS project',
            'Loco - simple responsive landig page',
            'Tesla - simple responsive landig page'
        ]

        const sliderIndex = [
            '01',
            '02',
            '03',
            '04'
        ]


        let num = 0;

        function next() {
            num++;
            if (num >= sliderImages.length) {
                num = 0;
            }
            slider.src = sliderImages[num];
            sliderLinkHtml.href = sliderLinks[num];
            sliderName.innerHTML = sliderNames[num];
            sliderIndexHtml.innerHTML = sliderIndex[num];
            sliderCiteHtml.innerHTML = sliderCite[num];
            addSliderAnim()
            removeSliderAnim()
        }

        function prev() {
            num--;
            if (num < 0) {
                num = sliderImages.length - 1;
            }
            slider.src = sliderImages[num];
            sliderLinkHtml.href = sliderLinks[num];
            sliderName.innerHTML = sliderNames[num];
            sliderIndexHtml.innerHTML = sliderIndex[num];
            sliderCiteHtml.innerHTML = sliderCite[num];
            addSliderAnim()
            removeSliderAnim()
        }

        function addSliderAnim() {
            sliderAnimationVars.forEach(function(item, i, arr) {
                item.classList.add('animated', 'fadeIn', 'fast')
            });

        }

        function removeSliderAnim() {
            sliderAnimationVars.forEach(function(item, i, arr) {
                item.addEventListener('animationend', () => {
                    item.classList.remove('animated', 'fadeIn', 'fast')
                })
            });
        }

        sliderBtnRight.addEventListener('click', next, removeSliderAnim());
        sliderBtnLeft.addEventListener('click', prev, removeSliderAnim());

    }

    function getGitReposFunc() {
        const url = 'https://api.github.com/users/fristyr/repos'

        fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                const repoWrapp = document.querySelector('.repos-wrapp')

                const htmlForRepo = data.map(function(item) {
                    const repoLink = item.html_url
                    return `
              <article class="repo"> 
                  <a href="${repoLink}" target="_blank" class="repo__name">${item.name}</a>
                  <div class="repo__info">
                      <span class="repo__technology">${item.language}</span> 
                      <span class="repo__technology repo__technology_stars">${item.stargazers_count}</span>
                      <span class="repo__technology repo__technology_fork">${item.forks}</span> 
                      <span class="repo__update">Updated on ${new Date(item.updated_at).toLocaleDateString('en-EN',{day: 'numeric',month:'long',year: 'numeric'}).replace(" y.", "")}</span>
                  </div>
              </article>
              `
                })

                repoWrapp.insertAdjacentHTML('afterbegin', htmlForRepo.join(' '))
            })
    }


    function anchorLinksFunc() {
        const anchors = document.querySelectorAll('a[href*="#"]')

        for (let anchor of anchors) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href')

                document.querySelector('' + blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }



    class TextScramble {
        constructor(el) {
            this.el = el
            this.chars = '!<>-_\\/[]{}=+*^?#'
            this.update = this.update.bind(this)
        }
        setText(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 100)
                const end = start + Math.floor(Math.random() * 100)
                this.queue.push({
                    from,
                    to,
                    start,
                    end
                })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
        }
        update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let {
                    from,
                    to,
                    start,
                    end,
                    char
                } = this.queue[i]
                if (this.frame >= end) {
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.01) {
                        char = this.randomChar()
                        this.queue[i].char = char
                    }
                    output += `<span class="intro__subtitle_char">${char}</span>`
                } else {
                    output += from
                }
            }
            this.el.innerHTML = output
            if (complete === this.queue.length) {
                this.resolve()
            } else {
                this.frameRequest = requestAnimationFrame(this.update)
                this.frame++
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    }



    const phrases = [
        'a web developer',
        'a front-end developer',
        'a JavaScript developer'

    ]

    const el = document.querySelector('.intro__subtitle')
    const fx = new TextScramble(el)

    let counter = 0
    const nextScrumbFunc = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(nextScrumbFunc, 1800)
        })
        counter = (counter + 1) % phrases.length
    }

    nextScrumbFunc()



    mainPreloaderFunc()
    mainModalFunc()
    gitModalFunc()
    mapModalFunc()
    formModalFunc()
    formValidateFunc()
    skillsModalFunc()
    portfolioSliderFunc()
    getGitReposFunc()
    anchorLinksFunc()
    nextScrumbFunc()
})();