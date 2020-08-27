<template>
  <div class="stack section" id="skills">
      <div class="section-title">
          My Skills
      </div>
      <div class="skills">
          <div class="skill">
              <div class="skill-title">
                👨‍💻 Languages
              </div>
              <div class="skill-rect"></div>
              <ul>
                  <li>
                    <a href="https://www.w3.org/html/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        html and css
                    </a> | it's like lego's
                  </li>
                  <li>
                    <a href="https://developer.mozilla.org/nl/docs/Web/JavaScript" class="list-item" target="_blank" rel="noopener" noreferrer>
                        javascript
                    </a> | i'm a big fan
                  </li>
                  <li>
                    <a href="https://www.php.net/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        php
                    </a> | simple and fun syntax
                  </li>
                  <li>
                    <a href="https://www.mongodb.com/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        (no)sql
                    </a> | SELECT * FROM users WHERE id=1
                  </li>
              </ul>
          </div>
          <div class="skill">
              <div class="skill-title">
                🚀 Technologies
              </div>
              <div class="skill-rect"></div>
              <ul>
                  <li>
                    <a href="https://nodejs.org/en/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        node.js
                    </a> | made javascript great again
                  </li>
                  <li>
                    <a href="https://expressjs.com/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        express.js
                    </a> | listening on port 5000
                  </li>
                  <li>
                    <a href="https://vuejs.org/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        vue.js
                    </a> | favorite framework
                  </li>
                  <li>
                    <a href="https://mongodb.com/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        mongodb
                    </a> | flexable data
                  </li>
              </ul>
          </div>
          <div class="skill">
              <div class="skill-title">
                🔨 Toolkit
              </div>
              <div class="skill-rect"></div>
              <ul>
                  <li>
                    <a href="https://code.visualstudio.com/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        vscode
                    </a> | best editor ever
                  </li>
                  <li>
                    <a href="https://github.com/rohitjethoe" class="list-item" target="_blank" rel="noopener" noreferrer>
                        devops
                    </a> | git & github.
                  </li>
                  <li>
                    <a href="https://github.com/rohitjethoe" class="list-item" target="_blank" rel="noopener" noreferrer>
                        terminal
                    </a> | coders fastest friend.
                  </li>
                  <li>
                    <a href="https://apple.com/" class="list-item" target="_blank" rel="noopener" noreferrer>
                        macbook
                    </a> | macOS & intel i7
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Stack'
}
</script>

<style scoped>
.section {
    margin-top: 10%;
}

.section-title {
    font-weight: 600;
    text-transform: uppercase;
    color: #797d7f;
    margin-bottom: 10px;
}

.skills {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
}

.skill {
    width: 80%;
    margin: 8px 0px;
}

.skill .skill-title {
    font-size: 24px;
    font-weight: 600;
}

.skill-rect {
    width: 280px;
    height: 2px;
    background-color: #c2c2c2;
    margin: 4px 0px;
}

ul li {
    list-style-type: none;
    margin-top: 1px;
    margin-bottom: 1px;
}

ul li a:link, ul li a:visited {
    font-weight: 600;
    color: #1b1919;
    text-decoration: none;
    border-bottom: 3px solid #b1b1b1;
    transition: 0.5s all;
}

ul li a:hover {
    border-bottom-color: #1b1919;
}

@media only screen and (min-width: 1000px) {
    .section {
        margin-left: 12.5%;
    }

    .skill {
        width: 280px;
        margin-right: 60px;
    }

    .skill-rect {
        width: 110%;
    }
}

@media only screen and (max-width: 1000px) {
    .section {
        margin-left: 10%;
    }

    .skill {
        width: 250px;
        margin-right: 60px;
    }

    .skill-rect {
        width: 110%;
    }
}

@media only screen and (max-width: 800px) {
    .section {
        margin-left: 12.5%;
    }

    .skill {
        width: 38%;
        margin-right: 60px;
    }

    .skill-rect {
        width: 110%;
    }
}

@media only screen and (max-width: 650px) {
    .skill {
        margin: 20px 0px;
    }
}

@media only screen and (max-width: 500px) {
    .skills {
        display: block;
        width: 100%;
        flex-direction: none;
        flex-wrap: nowrap;
    }
}

@media only screen and (max-width: 395px) {
    .section {
        margin-left: 7.5%;
    }
}

</style>