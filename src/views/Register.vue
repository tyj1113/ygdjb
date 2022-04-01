<template>
  <el-form
      ref="formRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      label-position="top"
  >
    <div class="wrapper">
      <div class="left">
        <div class="title">
          <div>个人信息登记表</div>
          <div>
            <img :src="require('../assets/form-logo.png')" alt="">
          </div>
        </div>

        <el-row :gutter="20" style="margin-bottom: 30px">
          <el-col :span="7">
            <el-row justify="center">
              <el-col :span="24" align="center">
                <div>
                  <div class="photo">
                    <img :src="avatarSrc" alt="" style="width: 100%;">
                  </div>
                  <div>
                    <el-button @click="uploadAvatar">上传</el-button>
                    <el-button @click="uploadAvatar">更换</el-button>
                    <input type="file" accept="image/*" @change="getImg($event)" style="display:none" value="" id="img_z"
                    ref="avatar"
                    />
                  </div>
                </div>

              </el-col>
            </el-row>

          </el-col>
          <el-col :span="14">
            <h2>一、基本信息</h2>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="性别" prop="sex">
                  <el-radio-group v-model="ruleForm.sex">
                    <el-radio :label="1">男</el-radio>
                    <el-radio :label="2">女</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="出生年月" prop="birthTime">
                  <el-date-picker
                      v-model="ruleForm.birthTime"
                      type="date"
                      placeholder="选择出生年月"
                      style="width: 100%"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="民族" >
                  <el-input v-model="ruleForm.typeEthnic"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="政治面貌" >
              <el-select v-model="ruleForm.typePolitical" placeholder="请选择政治面貌" prop="typePolitical">
                <el-option v-for="item in typePoliticalOptions" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="身份证号" prop="identityNo">
              <el-input v-model="ruleForm.identityNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="社保号" prop="socialNo">
              <el-input v-model="ruleForm.socialNo"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="手机" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="电子邮件" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="固定电话" prop="tel">
              <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="开户行名称" prop="bankname">
              <el-input v-model="ruleForm.bankname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item  prop="account">
              <el-input v-model="ruleForm.account">
<!--                <template #prepend>-->
<!--                  <span>银行卡号</span>-->
<!--                  <span style="color:red">(非杭州联合开发银行不填)</span>-->
<!--                </template>-->
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form-item label="联系地址" prop="address">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="婚姻" prop="stateMarriage">
              <el-select v-model="ruleForm.stateMarriage" placeholder="请选择婚姻状况" >
                <el-option v-for="item in startMarriageOptions" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form-item label="籍贯" prop="nativePlace">
              <el-input v-model="ruleForm.nativePlace"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="邮编" prop="postcode">
              <el-input v-model="ruleForm.postcode"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form-item label="户口" prop="identityAddress ">
              <el-input v-model="ruleForm.identityAddress "></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="血型" prop="typeBlood ">
              <el-input v-model="ruleForm.typeBlood "></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <div class="right">
        <h2>二、学业与技能信息</h2>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="毕业院校" prop="graduatedSchool">
              <el-input v-model="ruleForm.graduatedSchool"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="学历" prop="education">
              <el-input v-model="ruleForm.education"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="专业" prop="profession">
              <el-input v-model="ruleForm.profession"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="职称" prop="jobTitle ">
              <el-input v-model="ruleForm.jobTitle "></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="外语水平" prop="foreignLanguageLevel ">
              <el-input v-model="ruleForm.foreignLanguageLevel "></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="计算机水平" prop="computerSkillLevel">
              <el-input v-model="ruleForm.computerSkillLevel"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="特长" prop="specialty">
              <el-input v-model="ruleForm.specialty"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <h2>三、面试信息</h2>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="面试部门" prop="interviewDepartment">
              <el-input v-model="ruleForm.interviewDepartment"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="面试岗位" prop="interviewJob">
              <el-input v-model="ruleForm.interviewJob"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="报到时间" prop="dateWork ">
              <el-date-picker
                  v-model="ruleForm.dateWork "
                  type="date"
                  placeholder="选择报到时间"
                  style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <h2>四、紧急联系人</h2>
        <el-table :data="ruleForm.contactsTable" style="width: 100%" border>
          <el-table-column
              v-for="item in contactsTable"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'contactsTable.' + scope.$index + '.input'"
                  :style="{marginBottom:0}"
              >
                <el-input :style="{width:'100%'}" v-model="scope.row[item.prop]"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
              width="100px"
              label="操作"
              align="center"
          >
            <template v-slot="scope">
              <el-button v-if="scope.row.add" @click="add('contactsTable')">
                新增
              </el-button>
              <el-button v-else @click="del('contactsTable',scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <h2>五、工作经历</h2>
        <el-table :data="ruleForm.workHistoryTable" style="width: 100%" border>
          <el-table-column
              v-for="item in workHistoryTable"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'contactsTable.' + scope.$index + '.input'"
                  :style="{marginBottom:0}"
              >
                <el-input v-if="item.prop!=='workDate'" :style="{width:'100%'}"
                          v-model="scope.row[item.prop]"></el-input>
                <el-date-picker
                    v-else
                    v-model="scope.row[item.prop]"
                    type="monthrange"
                    range-separator="到"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
              width="100px"
              label="操作"
              align="center"
          >
            <template v-slot="scope">
              <el-button v-if="scope.row.add" @click="add('workHistoryTable')">
                新增
              </el-button>
              <el-button v-else @click="del('workHistoryTable',scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <h2>六、家庭状况</h2>
        <el-table :data="ruleForm.familyDetailTable" style="width: 100%" border>
          <el-table-column
              v-for="item in familyDetailTable"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'contactsTable.' + scope.$index + '.input'"
                  :style="{marginBottom:0}"
              >
                <el-input :style="{width:'100%'}"
                          v-model="scope.row[item.prop]"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
              width="100px"
              label="操作"
              align="center"
          >
            <template v-slot="scope">
              <el-button v-if="scope.row.add" @click="add('familyDetailTable')">
                新增
              </el-button>
              <el-button v-else @click="del('familyDetailTable',scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <span>下面还有请向下滑</span>
        <h2>七、所获证书</h2>
        <el-table :data="ruleForm.certificateTable" style="width: 100%" border>
          <el-table-column
              v-for="item in certificateTable"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'contactsTable.' + scope.$index + '.input'"
                  :style="{marginBottom:0}"
              >

                <el-input v-if="['dateIssue','dateEffective'].indexOf(item.prop)===-1"
                          :style="{width:'100%'}"
                          v-model="scope.row[item.prop]"></el-input>
                <el-date-picker
                    v-else
                    v-model="scope.row[item.prop]"
                    type="date"
                    placeholder="选择时间"
                    style="width: 100%"
                />
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
              width="250px"
              label="操作"
              align="center"
          >
            <template v-slot="scope">
              <el-button v-if="scope.row.add" @click="add('certificateTable')">
                新增
              </el-button>
              <div class="btns" v-else>
                <el-button  @click="preview()">
                  预览
                </el-button>
                <el-button  @click="download()">
                  下载
                </el-button>
                <el-button  @click="del('certificateTable',scope.row)">
                  删除
                </el-button>
              </div>

            </template>
          </el-table-column>
        </el-table>
<!--        <h2>八、添加附件</h2>-->
        <h2>八、其他</h2>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="1.奖惩情况" prop="rewardsAndPunishments">
              <el-input v-model="ruleForm.rewardsAndPunishments" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="2.个人学习计划" prop="studyPlan">
              <el-input v-model="ruleForm.studyPlan" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="3.培训情况" prop="training">
              <el-input v-model="ruleForm.training" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="4.备注" prop="memo">
              <el-input v-model="ruleForm.memo" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="btns">
          <el-button @click="submit">保存</el-button>
          <el-button>取消</el-button>
          <el-button>复制链接</el-button>
        </div>

        <span style="margin-bottom: 30px;">到底了~</span>
      </div>
    </div>

  </el-form>
</template>

<script setup>
import {reactive, ref} from 'vue'

const avatar=ref()
const avatarSrc=ref('')
const formRef = ref()
const ruleForm = reactive({
  name: '',
  sex: 1,
  birthTime:'',
  typeEthnic:'',
  typePolitical:'',
  identityNo:'',
  socialNo:'',
  rewardsAndPunishments:'',
  studyPlan:'',
  training:'',
  memo:'',
  email:'',
  tel:'',
  bankname:'',
  account:'',
  address:'',
  stateMarriage:'',
  postcode:'',
  identityAddress:'',
  typeBlood:'',
  profession:'',
  jobTitle:'',
  foreignLanguageLevel:'',
  computerSkillLevel:'',
  specialty:'',
  dateWork:'',
  // name: 'Hello',
  // region: '',
  // date1: '',
  // date2: '',
  // delivery: false,
  // type: [],
  // resource: '',
  // desc: '',
  contactsTable: [
    {
      name: '',
      relationship: '',
      phone: ''
    },
    {
      add: true
    },
  ],
  workHistoryTable: [
    {
      workDate: '',
      companyName: '',
      department: '',
      job: '',
      content: ''
    },
    {
      add: true
    },
  ],
  familyDetailTable: [
    {
      relationship: '',
      name: '',
      phone: '',
      companyName: '',
      address: ''
    },
    {
      add: true
    },
  ],
  certificateTable:[
    {
      certificateTypeName: '',
      no: '',
      dateIssue: '',
      dateEffective: '',
      userName: ''
    },
    {
      add: true
    },
  ]
})
const tableList=[
    'contactsTable',
  'workHistoryTable',
  'familyDetailTable',
  'certificateTable']
const rules = reactive({
  name: [
    {required: true, message: '请输入姓名', trigger: 'blur'},
  ],
  sex: [
    {required: true, message: '请选择性别', trigger: 'blur'},
  ],
  birthTime: [
    {required: true, message: '请选择出生日期', trigger: 'blur'},
  ],
  identityNo: [
    {required: true, message: '请输入身份证号', trigger: 'blur'},
  ],
  socialNo: [
    {required: true, message: '请输入社保号', trigger: 'blur'},
  ],
  typePolitical: [
    {required: true, message: '请选择政治面貌', trigger: 'blur'},
  ],
  phone: [
    {required: true, message: '请输入手机号', trigger: 'blur'},
  ],
  nativePlace: [
    {required: true, message: '请输入籍贯', trigger: 'blur'},
  ],
  education: [
    {required: true, message: '请输入学历', trigger: 'blur'},
  ],
  interviewDepartment:[
    {required: true, message: '请输入面试部门', trigger: 'blur'},
  ],
  interviewJob:[
    {required: true, message: '请输入面试岗位', trigger: 'blur'},
  ],
  // contactsTableName: [
  //   {required: true, message: 'name', trigger: 'change'},
  // ]
})
const startMarriageOptions = reactive([
  {
    label: '未婚',
    value: 1
  },
  {
    label: '已婚',
    value: 2
  },
  {
    label: '丧偶',
    value: 3
  },
  {
    label: '离婚',
    value: 4
  },
])
const typePoliticalOptions = reactive([
  {
    label: '群众',
    value: 1
  },
  {
    label: '中共党员',
    value: 2
  }
])

const tableItems={
  contactsTableItem : {
    name: '',
    relationship: '',
    phone: ''
  },
  workHistoryTableItem : {
    workDate: '',
    companyName: '',
    department: '',
    job: '',
    content: ''
  },
  familyDetailTableItem:{
    relationship: '',
    name: '',
    phone: '',
    companyName: '',
    address: ''
  },
  certificateTableItem:{
    certificateTypeName: '',
    no: '',
    dateIssue: '',
    dateEffective: '',
    userName: ''
  }
}
const contactsTable = reactive([
  {
    prop: 'name',
    label: '联系人',
    width: '150px'
  },
  {
    prop: 'relationship',
    label: '与本人关系',
    width: '250px'
  },
  {
    prop: 'phone',
    label: '联系方式',
    width: '300px'
  },
  // {
  //   label:'操作'
  // }
])
const workHistoryTable = reactive([
  {
    prop: 'workDate',
    label: '工作时间',
    width: '200px'
  },
  {
    prop: 'companyName',
    label: '工作单位',
    width: '150px'
  },
  {
    prop: 'department',
    label: '部门',
    width: '100px'
  },
  {
    prop: 'job',
    label: '职务',
    width: '100px'
  },
  {
    prop: 'content',
    label: '工作内容',
    width: '150px'
  },
  // {
  //   label:'操作'
  // }
])
const familyDetailTable = reactive([
  {
    prop: 'relationship',
    label: '关系',
    width: '100px'
  },
  {
    prop: 'name',
    label: '姓名',
    width: '100px'
  },
  {
    prop: 'phone',
    label: '联系方式',
    width: '200px'
  },
  {
    prop: 'companyName',
    label: '工作单位',
    width: '100px'
  },
  {
    prop: 'address',
    label: '家庭地址',
    width: '200px'
  },
  // {
  //   label:'操作'
  // }
])
const certificateTable = reactive([
  {
    prop: 'certificateTypeName',
    label: '证书名称',
    width: '120px'
  },
  {
    prop: 'no',
    label: '证书编号',
    width: '120px'
  },
  {
    prop: 'dateIssue',
    label: '发证时间',
    width: '160px'
  },
  {
    prop: 'dateEffective',
    label: '生效时间',
    width: '160px'
  },
  {
    prop: 'userName',
    label: '持证人',
    width: '100px'
  },
  // {
  //   label:'操作'
  // }
])


const add = (name) => {
  if (tableList.indexOf(name)===-1) {
    return
  }
  console.log(tableList.certificateTable)
  const last=ruleForm[name].pop()
  ruleForm[name].push(JSON.parse(JSON.stringify(tableItems[name+'Item'])),last)
}
const del=(name,item)=>{
  if (tableList.indexOf(name)===-1 || ruleForm[name].length <= 2) {
    return
  }
  const index = ruleForm[name].indexOf(item)
  ruleForm[name].splice(index, 1)
}
const download=()=>{}
const preview=()=>{}
const submit=()=>{
  console.log(ruleForm)
}
const uploadAvatar=()=>{
  avatar.value.click()
}
const getImg=()=>{
  var file = avatar.value.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(e){
    avatarSrc.value=e.target.result
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  padding: 0 0 0 30px;
  height: 100vh;
  overflow: hidden;
}
.left, .right {
  min-width: 740px;
  padding: 10px 0;
  .title {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    > div {
      font-size: 35px;
      font-weight: bolder;
      display: flex;
      justify-content: center;

      img {
        width: 220px;
      }
    }

    > div:nth-child(1) {
      width: 60%;
    }

    > div:nth-child(2) {
      width: 40%;
    }
  }
}
.right{
  width: 65%;
  height: 100%;
  overflow: auto;
  padding-left:50px;
  padding-right:20px;
  >span{
    display: inline-block;
    text-align: center;
    width: 100%;
    margin: 10px;
    color:#ccc;
    font-size: 14px;
  }
}
.left{
  width: 35%;
  border-right:1px solid #ccc;
  .photo{
    width: 120px;
    height: 170px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
}
</style>
