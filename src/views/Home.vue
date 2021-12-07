<template>
  <Navbar/>
  <div class="container my-4">
    <form>
      <!-- REVIEWER ID -->
      <div class="input-group mb-3">
        <span class="input-group-text">Reviewer ID</span>
        <input v-model="electronic.reviewerID" type="text" class="form-control">
      </div>
      <!-- REVIEWER NAME -->
      <div class="input-group mb-3">
        <span class="input-group-text">Reviewer Name</span>
        <input v-model="electronic.reviewerName" type="text" class="form-control">
      </div>
      <!-- OVERALL -->
      <div class="input-group mb-3">
        <span class="input-group-text">Overall</span>
        <input v-model="electronic.overall" type="number" class="form-control">
      </div>
      <!-- COMMENT TEXT -->
      <div class="input-group mb-3">
        <span class="input-group-text">Comment Text</span>
        <input v-model="electronic.commentText" type="text" class="form-control">
      </div>
      <!-- SAVE BUTTON -->
      <div class="mt-3">
        <button @click.prevent="addData()"
            class="btn btn-primary">Save Comment
        </button>
      </div>
    </form>
  </div>

  <div class="container">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Comment ID</th>
        <th scope="col">Reviewer ID</th>
        <th scope="col">Reviewer Name</th>
        <th scope="col">Overall</th>
        <th scope="col">Text</th>
        <th scope="col">ID</th>
        <th scope="col">Delete</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in electronics" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.reviewerID}}</td>
        <td>{{item.reviewerName}}</td>
        <td>{{item.overall}}</td>
        <td>{{item.commentText}}</td>
        <td>{{item.id}}</td>
        <td>
          <button @click.prevent="deleteData(item.id)"
            class="btn btn-danger">Delete
          </button>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import { db } from "../main";

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data(){
    return {
      electronics: [],
      electronic: {
        reviewerID: '',
        reviewerName: '',
        overall: 0,
        commentText: ''
      }
    }
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
    },
    async addData()
    {
      const docRef = await addDoc(collection(db, "electronics"), {
        reviewerID: this.electronic.reviewerID,
        reviewerName: this.electronic.reviewerName,
        overall: this.electronic.overall,
        commentText: this.electronic.commentText
      })
      .then(() => {
        console.log("Nuevo documento añadido");
      })
      .catch(function(error) {
        console.error("Error al añadir el documento: ", error);
      });
    },
    async deleteData (id)
    {
      await deleteDoc(doc(db, "electronics", id ));
    }
  },
  mounted()
  {
    //EXECUTE THE FUNCTION BEFORE LOADING THE PAGE
    this.getData();
  }
}
</script>
