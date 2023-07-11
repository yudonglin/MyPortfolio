<template>
  <form ref="form" class="contactform" @submit.prevent="sendDisabled">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
              v-model="name"
              name="name"
              placeholder="YOUR NAME"
              required
              type="text"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
              v-model="email"
              name="user_email"
              placeholder="YOUR EMAIL"
              required
              type="email"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-12">
        <div class="form-group">
          <input
              v-model="subject"
              name="subject"
              placeholder="YOUR SUBJECT"
              required
              type="text"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <div class="form-group">
          <textarea
              v-model="message"
              name="message"
              placeholder="YOUR MESSAGE"
              required
          ></textarea>
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <button class="button" type="submit">
          <span class="button-text">Send Message</span>
          <span class="button-icon fa fa-send"></span>
        </button>
      </div>
      <!-- {/* End .col */} -->
    </div>
  </form>
</template>

<script>
// import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendDisabled() {
      alert("This feature has been disabled due to DDOS, please contact me through email. Sorry for the inconvenience.");
    },
    /*sendEmail() {
      emailjs
          .sendForm(
              "service_n4mkhz9",
              "template_ugoztxr",
              this.$refs.form,
              "user_vYmDSd9PwIuRXUQEDjYwN",
              {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,
              }
          )
          .then(
              (result) => {
                console.log("SUCCESS!", result.text);
                alert("Message sent!");
              },
              (error) => {
                console.log("FAILED...", error.text);
                alert("Message not sent", error);
              }
          );
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },*/
  },
};
</script>
