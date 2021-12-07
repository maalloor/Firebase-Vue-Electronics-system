<template>
  <Navbar/>
  <div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Comment ID</th>
        <th scope="col">Reviewer ID</th>
        <th scope="col">Reviewer Name</th>
        <th scope="col">Overall</th>
        <th scope="col">Text</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in electronics" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.reviewerID}}</td>
        <td>{{item.reviewerName}}</td>
        <td>{{item.overall}}</td>
        <td>{{item.commentText}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from "../main";

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data(){
    return { electronics: [] }
  },
  methods:{
    //GET METHOD
    async getData()
    {
      const querySnapshot = await getDocs(collection(db, "electronics"));
      querySnapshot.forEach((doc) => {
        let electronic = doc.data();
        //console.log(electronic)
        //console.log(electronic.id);
        //console.log(doc.id);
        electronic.id = doc.id;
        this.electronics.push(electronic);
        console.log(electronic)
      });
    }
  },
  mounted()
  {
    this.getData();
  }
}
</script>
