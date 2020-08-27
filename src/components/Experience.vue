<template>
  <div class="experience section" id="experience">
    <div class="section-title">
      Work Experiences
    </div>
    <div class="job">
      <img src="@/assets/government.png" alt="Government">
      <div class="job-details">
        <div class="job-title">
          Open Source Contribution - COVID-19 Notification App Website
        </div>
        <div class="job-company">
          Ministry of Health, Welfare and Sports.
        </div>
        <div class="job-description">
          I’ve contributed to the Open Source COVID-19 Notification App by working on the front end finding and fixing issues.
        </div>
      </div>
    </div>
    <div class="job">
      <img src="@/assets/datenanfragen.png" alt="Datenanfragen.de">
      <div class="job-details">
        <div class="job-title">
          Open Source Contribution - Data Requests Website
        </div>
        <div class="job-company">
          Datenanfragen - Your Right to Privacy.
        </div>
        <div class="job-description">
          I have worked on <a href="https://datenanfragen.de">Datenanfragen.de</a> and worked on fixing bugs and issues on the front end with JavaScript.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Experience'
}
</script>

<style scoped>
.section {
  margin-top: 18%;
}

.section-title {
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #797d7f;
  margin-left: 7.5%;
}

.job {
  width: 320px;
  margin-bottom: 5%;
  margin-top: 40px;
  margin-left: 7.5%;
}

.job::after {
  clear: both;
  content: "";
  display: table;
}

.job-title {
  font-size: 14px;
}

.job-details {
  width: 200px;
  font-size: 12px;
}

.job img {
  width: 100px;
  float: left;
}

.job .job-details {
  float: right;
}

.job-title {
  font-weight: 600;
}

.job-company {
  font-weight: 600;
  color: #797d7f;
}

.job-description {
  color: #4D4D4D;
  margin-top: 5px;
  margin-bottom: 10px;
}

@media only screen and (min-width: 440px) {
  .section-title {
    margin-left: 12.5%;
  }
  .job {
    margin-left: 12.5%;
    width: 380px;
  }

  .job img {
    width: 120px;
  }

  .job-title {
    font-size: 18px;
  }

  .job-details {
    font-size: 14px;
    width: 240px;
  }
}

@media only screen and (min-width: 395px) {
  .job {
    margin-left: 12.5%;
  }

  .section-title {
    margin-left: 12.5%;
  }
}

@media only screen and (min-width: 600px) {
  .section {
    margin-top: 10%;
  }

  .job {
    width: 480px;
  }
  
  .job img {
    width: 140px;
  }
  
  .job-title {
    font-size: 20px;
  }

  .job-details {
    width: 320px;
    font-size: 16px;
  }
}

@media only screen and (min-width: 800px) {
  .section-title {
    margin-left: 10%;
  }
  .job {
    margin-left: 10%;
    width: 540px;
  }

  .job img {
    width: 180px;
  }

  .job-title {
    font-size: 24px;
  }
  
  .job-details {
    font-size: 18px;
  }
}

@media only screen and (min-width: 1000px) {
  .section-title {
    font-size: 18px;
    margin-left: 12%;
  }

  .job {
    width: 600px;
    margin-left: 12%;
  }

  .job img {
    width: 200px;
  }

  .job-title {
    font-size: 28px;
  }

  .job-details {
    font-size: 20px;
    width: 360px;
  }
}
</style>