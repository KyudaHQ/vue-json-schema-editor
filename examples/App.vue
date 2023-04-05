<template>
  <div id="app">
    <div class="title">
      <a href="https://github.com/kyudahq/vue-json-schema-editor" target="_blank">vue-json-schema-editor</a>
      <!-- <span class="version"> version：{{ version }}</span> -->
    </div>
    <div class="desc">
      <div>A json-schema editor of high efficient and easy-to-use, base on Vue.<br />
        <a @click="visible = true">Import JSON</a>
      </div>
    </div>
    <div class="container">
      <codemirror class="code" v-model="jsonStr" :readOnly="false" />
      <json-schema-editor class="schema" :value="tree" disabledType lang="en_US" custom />
    </div>
    <a-modal v-model="visible" title="import json" width="800px" height="600x" @ok="handleImportJson">
      <div class="code-container">
        <codemirror class="code" v-model="importJson" :readOnly="false" />
      </div>
    </a-modal>
  </div>
</template>

<script>
var app = require("../package.json");
import Codemirror from './components/Codemirror.vue'
import GenerateSchema from 'generate-schema'
export default {
  name: 'App',
  components: { Codemirror },
  computed: {
    jsonStr: {
      get: function () {
        return JSON.stringify(this.tree, null, 2)
      },
      set: function (newVal) {
        this.tree = JSON.parse(newVal)
      }
    }
  },
  data() {
    return {
      version: app.version,
      importJson: '',
      visible: false,
      tree:
      {
        "root": {
          "type": "object",
          "title": "my object",
          "properties": {
            "name": {
              "type": "string",
              "title": "my name",
              "maxLength": 10,
              "minLength": 2
            },
            "app_id": {
              "type": "integer",
              "title": "my app_id",
            },
            "created_at": {
              "type": "string",
              "title": "my created_at",
              "format": "date"
            }
          },
          "required": [
            "name",
            "app_id",
            "created_at"
          ]
        }
      }
    }
  },
  methods: {
    handleImportJson() {
      const t = GenerateSchema.json(JSON.parse(this.importJson))
      delete t.$schema
      this.tree.root = t
      this.visible = false
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  height: 100px;
  line-height: 100px;
}

.version {
  font-size: 16px;
}

.desc {
  padding: 20px;
  width: 80vw;
  min-width: 800px;
  margin: auto;
  padding: 0 3em;
  font-size: 1.2em;
}

.container {
  display: flex;
  padding: 20px;
  width: 80vw;
  min-width: 800px;
  justify-content: center;
  height: calc(100vh - 150px);
  margin: auto;
}

.code-container {
  max-height: 600px;
  overflow: auto;
}

.schema {
  margin-left: 20px;
  width: 50%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 8px;
  padding: 12px;
}

.CodeMirror {
  height: 100% !important;
}

.vue-codemirror {
  flex: 1;
  margin: 0 24px;
  border: 1px solid rgba(0, 0, 0, .1);
  min-height: 300px;
  overflow: auto;
  border-radius: 6px;
}</style>
