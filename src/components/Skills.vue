<template>
  <div class="skills section" id="skills">
      <div class="skill-legend">
        <div class="skill-legend-level level-medium" @mouseover="hover0 = true" @mouseleave="hover0 = false">
          <div class="skill-legend-square medium"></div>
          Well understood
        </div>
        <div class="skill-legend-level level-expert" @mouseover="hover1 = true" @mouseleave="hover1 = false">
          <div class="skill-legend-square expert"></div>
          Expert
        </div>
        <div class="skill-legend-level level-preferred" @mouseover="hover2 = true" @mouseleave="hover2 = false">
          <div class="skill-legend-square preferred"></div>
          Expert + Preferred
        </div>
      </div>
      <div class="section-skills" v-bind:class="{ 'hover-0-active' : hover0, 'hover-1-active' : hover1, 'hover-2-active' : hover2 }">
        <div class="skill level-1">
          <span class="type">
            language:
          </span>
          <span class="technology">
            html
          </span>
        </div>
        <div class="skill level-1">
          <span class="type">
            language:
          </span>
          <span class="technology">
            css
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            language:
          </span>
          <span class="technology">
            javascript
          </span>
        </div>
        <div class="skill level-0">
          <span class="type">
            language:
          </span>
          <span class="technology">
            php
          </span>
        </div>
        <div class="skill level-0">
          <span class="type">
            database:
          </span>
          <span class="technology">
            mysql
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            editor:
          </span>
          <span class="technology">
            vscode
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            version control:
          </span>
          <span class="technology">
            git
          </span>
        </div>
        <div class="skill level-1">
          <span class="type">
            platform:
          </span>
          <span class="technology">
            github
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            package manager:
          </span>
          <span class="technology">
            npm
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            runtime:
          </span>
          <span class="technology">
            node
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            framework:
          </span>
          <span class="technology">
            vuejs
          </span>
        </div>
        <div class="skill level-0">
          <span class="type">
            framework:
          </span>
          <span class="technology">
            react
          </span>
        </div>
        <div class="skill level-0">
          <span class="type">
            framework:
          </span>
          <span class="technology">
            react native
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            database:
          </span>
          <span class="technology">
            mongodb
          </span>
        </div>
        <div class="skill level-0">
          <span class="type">
            framework:
          </span>
          <span class="technology">
            electronjs
          </span>
        </div>
        <div class="skill level-1">
          <span class="type">
            library:
          </span>
          <span class="technology">
            puppeteer
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            framework:
          </span>
          <span class="technology">
            expressjs
          </span>
        </div>
        <div class="skill level-0">
          <span class="type">
            hosting:
          </span>
          <span class="technology">
            netlify
          </span>
        </div>
        <div class="skill level-1">
          <span class="type">
            hosting:
          </span>
          <span class="technology">
            heroku
          </span>
        </div>
        <div class="skill level-1">
          <span class="type">
            philosophy:
          </span>
          <span class="technology">
            web automation
          </span>
        </div>
        <div class="skill level-1">
          <span class="type">
            philosophy:
          </span>
          <span class="technology">
            responsive web development
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            version control:
          </span>
          <span class="technology">
            terminal
          </span>
        </div>
        <div class="skill level-0">
          <span class="type">
            framework:
          </span>
          <span class="technology">
            laravel
          </span>
        </div>
        <div class="skill level-2">
          <span class="type">
            language:
          </span>
          <span class="technology">
            json
          </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      hover0: false,
      hover1: false,
      hover2: false
    }
  }
}
</script>

<style scoped>
/* .section {
  margin-top: 10%;
} */

.section-title {
  font-weight: 600;
  text-transform: uppercase;
  color: #797d7f;
  margin-left: 7.5%;
}

.section-skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 60vw;
  margin-left: 7.5%;
}

.skill {
  background-color: #000;
  color: #fff;
  padding: 5px 12px;
  margin: 4px;
  transition: 0.2s all;
}

.skill .type {
  font-size: 14px;
  color: #F5F5F5;
}

.skill .technology {
  font-size: 16px;
  color: #fff;
  font-weight: 300;
}

.level-0 {
  background-color: #C4C4C4;
}

.level-1 {
  background-color: #2e6194;
}

.level-2 {
  background-color: #B2B2FA;
}

.skill-legend-square {
  width: 6px;
  height: 6px;
  background-color: #000;
  margin-right: 10px;
}

.skill-legend-level {
  display: flex;
  align-items: center;
  margin: 0px 10px;
  margin-bottom: 3px;
}

.skill-legend-level:hover {
  border-bottom: 3px solid;
  margin-bottom: 0px;
  cursor: pointer;
}

.skill-legend {
  display: flex;
  width: 60vw;
  margin: 20px 0px;
  margin-left: 7.5%;
}

.level-medium:hover {
  border-bottom-color: #C4C4C4;
}

.level-expert:hover {
  border-bottom-color: #2e6194;
}

.level-preferred:hover {
  border-bottom-color: #b2b2fa;
}

.medium {
  background-color: #C4C4C4;
}

.expert {
  background-color: #2e6194;
}

.preferred {
  background-color: #b2b2fa;
}

.hover-1-active .level-0, .hover-1-active .level-2 {
  opacity: 0.2;
}

.hover-0-active .level-1, .hover-0-active .level-2 {
  opacity: 0.2;
}

.hover-2-active .level-1, .hover-2-active .level-0 {
  opacity: 0.2;
}

@media only screen and (min-width: 395px) {
  .section-title {
    margin-left: 12.5%;
  }
  .skill-legend {
    margin-left: 11%;
  }
  .section-skills {
    margin-left: 11%;
  }
}

@media only screen and (min-width: 700px) {
  .section-skills {
    width: 600px;
  }
}

@media only screen and (min-width: 800px) {
  .section-title {
    margin-left: 10%;
  }

  .skill-legend {
    margin-left: 10%;
  }

  .section-skills {
    margin-left: 10%;
  }
}

@media only screen and (min-width: 1000px) {
  .section-title {
    margin-left: 12.5%;
  }

  .skill-legend {
    margin-left: 12.5%;
  }

  .section-skills {
    margin-left: 12.5%;
  }
}

@media only screen and (max-width: 700px) {
  .section-skills {
    width: 90vw;
  }

  .skill-legend-level {
    font-size: 12px;
  }
}

@media only screen and (max-width: 500px) {
  .section-skills {
    width: 90vw;
  }
  .skill-legend {
    width: 90vw;
  }
}

@media only screen and (max-width: 800px) {
  .section {
    display: none;
  }

  .skill-legend-level {
    margin-top: 8%;
    font-size: 12px;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .skill {
    padding: 2px 7px;
    padding-top: 0px;
    margin: 2px;
  }

  .skill .type {
    font-size: 8px;
  }

  .skill .technology {
    font-size: 10px;
  }

}
</style>