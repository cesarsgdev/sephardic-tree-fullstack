import { toast } from "react-toastify";

const useAPI = () => {
  class Fetch {
    constructor() {
      this.baseURL = "api";
      this.token = localStorage.getItem("token");
      this.headers = {
        "Content-Type": "application/json",
        "x-access-token": this.token,
      };
    }

    options(method, payload) {
      const options = {
        method: method || "GET",
        headers: this.headers,
        body: JSON.stringify(payload) || null,
      };
      return options;
    }

    async getTrees() {
      const trees = await fetch(`${this.baseURL}/trees`, this.options());
      const data = await trees.json();

      return data.data;
    }

    async getTreeByID(id) {
      const tree = await fetch(
        `../${this.baseURL}/trees/${id}`,
        this.options()
      );
      const data = await tree.json();
      return data.data;
    }

    async newTree(uid) {
      try {
        const tree = await fetch(
          `${this.baseURL}/trees/`,
          this.options("POST", { generations: [], uid: uid })
        );
        const data = await tree.json();
        toast.success(`Added tree ${data.data.name}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return data.data;
      } catch (e) {
        toast.error(`Something went wrong! Please try again`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }

    async deleteTree(treeID) {
      const tree = await fetch(
        `${this.baseURL}/trees/${treeID}`,
        this.options("DELETE")
      );
      const data = await tree.json();
      toast.success(`Tree "${data.data.name}" deleted`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return data.data;
    }

    async updateTree(treeID, value, oldValue) {
      const tree = await fetch(
        `${this.baseURL}/trees/${treeID}`,
        this.options("PUT", {
          name: value,
        })
      );
      const data = await tree.json();
      if (data.success) {
        toast.success(`Tree name changed from ${oldValue} to ${value}`, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  }

  const API = new Fetch();
  return [API];
};

export default useAPI;
