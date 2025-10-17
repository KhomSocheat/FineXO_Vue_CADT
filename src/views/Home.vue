<template>
   <div class="hero_area">

    <div class="hero_bg_box">
      <div class="bg_img_box">
        <img src="/images/hero-bg.png" alt="">
      </div>
    </div>

    <!-- header section strats -->
    <Navigation />

    <!-- end header section
     slider section -->
    <Slider />
    <!-- end slider section -->
  </div>


  <!-- service section -->

  <section class="service_section layout_padding">
    <!-- This is slot name call the component and the sent the props title  -->
    <TitleMain title="CADT" subtitle="IDG">
        <!-- we use slot to sent the html to the component it's reusable and make your code look clean -->
        <template #text>
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quo cupiditate fugit sequi veniam nihil excepturi placeat pariatur vero! Quam.</h6>
        </template>
        <template #content>
          <!-- this is the components service and loop the data via props -->
           <div class="row">

             <Service
               v-for="(item,index) in Services"
          :title="item.title"
          :description="item.description"
          :icon="item.icon"
          :key="index"
             />
           </div>
          </template>
      </TitleMain>
  </section>

  <!-- end service section -->


  <!-- about section -->

  <AboutUs />

  <!-- end about section -->

  <!-- why section -->

  <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Why Choose <span>Us</span>
        </h2>
      </div>
      <div class="why_container">
        <WhyChooseUs v-for="(item,index) in Why"
         :title="item.title"
         :description="item.description"
         :icon="item.icon"
         :key="index"/>
      </div>
      <div class="btn-box">
        <a href="">
          Read More
        </a>
      </div>
    </div>
  </section>

  <!-- end why section -->

  <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Team</span>
        </h2>
      </div>

      <div class="team_container">
        <div class="row">
          <Team v-for="(member,index) in Team"
           :name="member.name"
           :position="member.position"
           :image="member.image"
           :key="index"/>

        </div>
      </div>
    </div>
  </section>
  <!-- end team section -->


  <!-- client section -->

  <Client/>

  <!-- end client section -->


  <!-- info section -->

  <!-- <Info/> -->

  <!-- end info section -->

  <!-- footer section -->
  <!-- <Footer/> -->
</template>
<script>
import AboutUs from '@/components/AboutUs.vue';
import Client from '@/components/Client.vue';
import Service from '@/components/Service.vue';
import WhyChooseUs from '@/components/WhyChooseUs.vue';
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
import Slider from '@/components/Slider.vue';
import TitleMain from '@/components/TitleMain.vue';
import Team from '@/components/Team.vue';

  export default {
    components:{
      Navigation,
      Slider,
      Service,
      WhyChooseUs,
      AboutUs,
      TitleMain,
      Team,
      Client,

      Footer
    },
    data(){
      return{
        Services:[
          {
            title: 'Currency Wallet',
            description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            icon: '/images/s1.png'
          },
          {
            title: 'Security Storage',
            description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            icon: '/images/s2.png'
          },
          {
            title: 'Expert Support',
            description: 'fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
            icon: '/images/s3.png'
          }
        ],
        Why:[
          {
            title: 'Expert Management',
            description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
            icon: '/images/w1.png'
          },
          {
            title: 'Secure Investment',
            description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
            icon: '/images/w2.png'
          },
          {
            title: 'Instant Trading',
            description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
            icon: '/images/w3.png'
          },
          {
            title: 'Happy Customers',
            description: 'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus',
            icon: '/images/w4.png'
          }
        ],
        Team:[
          {
            name: 'Joseph Brown',
            position: 'Marketing Head',
            image: '/images/team-1.jpg'
          },
          {
            name: 'Nancy White',
            position: 'Marketing Head',
            image: '/images/team-2.jpg'
          },
          {
            name: 'Earl Martinez',
            position: 'Marketing Head',
            image: '/images/team-3.jpg'
          },
          {
            name: 'Josephine Allard',
            position: 'Marketing Head',
            image: '/images/team-4.jpg'
          }
        ]
      }
    }
  };
</script>
