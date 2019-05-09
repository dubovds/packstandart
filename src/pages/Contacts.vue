<template>
  <section class="section section_contacts">
    <div class="container">
      <div class="contacts">
        <div class="contacts__block">
          <div class="contacts__item">
        <div class="contacts__title">
          Наша элеткронная почта:  
        </div>    
        <div class="contacts__content">
          <a href="#" class="contacts__link">
            ex@mail.com
          </a>
          <a href="#" class="contacts__link">
            ex2@mail.com
          </a>
        </div>
      </div>
      <div class="contacts__item">
        <div class="contacts__title">
          Наши телефоны:  
        </div>    
        <div class="contacts__content">
          <div>066 123 45 67</div>
          <div>066 123 45 67</div>
        </div>
        </div>
      </div>
    </div>
    <div class="contacts__item contacts__item_middle">
        <div class="contacts__title">
          Нас можно найти по адресу: 
        </div>    
        <div class="contacts__content">
           Украина,<br>
          г. Днепр,<br>
          ул. Столбовая, 33а
        </div>
      </div>
    </div>
    <div class="contacts__map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5357.2705650658545!2d35.006203747549264!3d48.495356521691164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe26b692759d7%3A0x4b31d11998de35b0!2z0YPQu9C40YbQsCDQodGC0L7Qu9Cx0L7QstCw0Y8sIDMzLCDQlNC90LjQv9GA0L4sINCU0L3QtdC_0YDQvtC_0LXRgtGA0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0OTAwMA!5e0!3m2!1sru!2sua!4v1557397148880!5m2!1sru!2sua" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </section>
</template>

<script>
  export default{
    name: "contacts",
    data(){
      return{}
    }
  }
</script>