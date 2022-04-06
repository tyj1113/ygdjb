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
                    <el-button size="small" @click="uploadAvatar">上传</el-button>
                    <el-button size="small" @click="uploadAvatar">更换</el-button>
                    <input type="file" accept="image/*" @change="getImg" style="display:none" value=""
                           id="img_z"
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
                  <el-input size="small"  v-model="ruleForm.name"></el-input>
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
                      size="small"
                      v-model="ruleForm.birthTime"
                      type="date"
                      placeholder="选择出生年月"
                      style="width: 100%"
                      value-format="YYYY-MM-DD"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="民族">
                  <el-input size="small"  v-model="ruleForm.typeEthnic"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="政治面貌">
              <el-select  size="small" v-model="ruleForm.typePolitical" placeholder="请选择政治面貌" prop="typePolitical">
                <el-option v-for="item in typePoliticalOptions" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="身份证号" prop="identityNo">
              <el-input size="small"  v-model="ruleForm.identityNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="社保号" prop="socialNo">
              <el-input size="small"  v-model="ruleForm.socialNo"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="手机" prop="phone">
              <el-input size="small"  v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="电子邮件" prop="email">
              <el-input size="small"  v-model="ruleForm.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="固定电话" prop="tel">
              <el-input size="small"  v-model="ruleForm.tel"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="开户行名称" prop="bankname">
              <el-input size="small"  v-model="ruleForm.bankname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item prop="account">
              <span slot="label">银行卡号</span>
              <span slot="label" style="color:red;">(非杭州联合开发银行不填)</span>
              <el-input size="small"  v-model="ruleForm.account">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form-item label="联系地址" prop="address">
              <el-input size="small"  v-model="ruleForm.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="婚姻" prop="stateMarriage">
              <el-select size="small" v-model="ruleForm.stateMarriage" placeholder="请选择婚姻状况">
                <el-option v-for="item in startMarriageOptions" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form-item label="籍贯" prop="nativePlace">
              <el-input size="small"  v-model="ruleForm.nativePlace"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="邮编" prop="postcode">
              <el-input size="small"  v-model="ruleForm.postcode"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="14">
            <el-form-item label="户口" prop="identityAddress ">
              <el-input size="small"  v-model="ruleForm.identityAddress "></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="血型" prop="typeBlood ">
              <el-input size="small"  v-model="ruleForm.typeBlood "></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <div class="right">
        <h2>二、学业与技能信息</h2>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="毕业院校" prop="graduatedSchool">
              <el-input size="small"  v-model="ruleForm.graduatedSchool"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="学历" prop="education">
              <!--              <el-input size="small"  v-model="ruleForm.education"></el-input>-->
              <el-select size="small" v-model="ruleForm.education" placeholder="请选择学历">
                <el-option v-for="item in educationOptions" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="专业" prop="profession">
              <el-input size="small"  v-model="ruleForm.profession"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="职称" prop="jobTitle ">
              <el-input size="small"  v-model="ruleForm.jobTitle "></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="外语水平" prop="foreignLanguageLevel ">
              <el-input size="small"  v-model="ruleForm.foreignLanguageLevel "></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="计算机水平" prop="computerSkillLevel">
              <el-input size="small"  v-model="ruleForm.computerSkillLevel"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="特长" prop="specialty">
              <el-input size="small"  v-model="ruleForm.specialty"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <h2>三、面试信息</h2>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="面试部门" prop="interviewDepartment">
              <el-input size="small"  v-model="ruleForm.interviewDepartment"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="面试岗位" prop="interviewJob">
              <el-input size="small"  v-model="ruleForm.interviewJob"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="报到时间" prop="dateWork ">
              <el-date-picker
                  size="small"
                  v-model="ruleForm.dateWork "
                  type="date"
                  placeholder="选择报到时间"
                  style="width: 100%"
                  value-format="YYYY-MM-DD"
                  :disabled-date="reportDisabledDate"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <h2>四、紧急联系人</h2>
        <el-table :data="ruleForm.hrStaffInformationContactList" style="width: 100%" border>
          <el-table-column
              v-for="item in hrStaffInformationContactList"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'hrStaffInformationContactList.' + scope.$index + '.' + item.prop"
                  :style="{marginBottom:0}"
                  :rules="rules[item.prop]"
              >
                <el-input size="small" :style="{width:'100%'}" v-model="scope.row[item.prop]"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
              width="100px"
              label="操作"
              align="center"
          >
            <template v-slot="scope">
              <el-button size="small" v-if="scope.row.add" @click="add('hrStaffInformationContactList')">
                新增
              </el-button>
              <el-button size="small" v-else @click="del('hrStaffInformationContactList',scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <h2>五、工作经历</h2>
        <el-table :data="ruleForm.hrStaffInformationExperienceList" style="width: 100%" border>
          <el-table-column
              v-for="item in hrStaffInformationExperienceList"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'hrStaffInformationContactList.' + scope.$index + '.input'"
                  :style="{marginBottom:0}"
              >
                <el-input size="small" v-if="item.prop!=='workDate'" :style="{width:'100%'}"
                          v-model="scope.row[item.prop]"></el-input>
                <el-date-picker
                    v-else
                    size="small"
                    v-model="scope.row[item.prop]"
                    type="monthrange"
                    range-separator="到"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    value-format="YYYY-MM"
                />
<!--                :disabled-date="workHistoryDisabledDate"-->
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column
              width="100px"
              label="操作"
              align="center"
          >
            <template v-slot="scope">
              <el-button size="small" v-if="scope.row.add" @click="add('hrStaffInformationExperienceList')">
                新增
              </el-button>
              <el-button size="small" v-else @click="del('hrStaffInformationExperienceList',scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <h2>六、家庭状况</h2>
        <el-table :data="ruleForm.hrStaffInformationFamilyList" style="width: 100%" border>
          <el-table-column
              v-for="item in hrStaffInformationFamilyList"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'hrStaffInformationContactList.' + scope.$index + '.input'"
                  :style="{marginBottom:0}"
              >
                <el-input size="small" :style="{width:'100%'}"
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
              <el-button size="small" v-if="scope.row.add" @click="add('hrStaffInformationFamilyList')">
                新增
              </el-button>
              <el-button size="small" v-else @click="del('hrStaffInformationFamilyList',scope.row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <span>下面还有请向下滑</span>
        <h2>七、所获证书</h2>
        <el-table :data="ruleForm.hrStaffInformationCertificateList" style="width: 100%" border>
          <el-table-column
              v-for="item in hrStaffInformationCertificateList"
              :min-width="item.width"
              :label="item.label"
              :prop="item.prop"
              :key="item.label"
              align="center"
          >
            <template v-slot="scope">
              <el-form-item
                  v-if="!scope.row.add"
                  :prop="'hrStaffInformationContactList.' + scope.$index + '.input'"
                  :style="{marginBottom:0}"
              >

                <el-input size="small" v-if="['dateIssue','dateEffective'].indexOf(item.prop)===-1"
                          :style="{width:'100%'}"
                          v-model="scope.row[item.prop]"></el-input>
                <el-date-picker
                    v-else
                    size="small"
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
              <el-button size="small" v-if="scope.row.add" @click="add('hrStaffInformationCertificateList')">
                新增
              </el-button>
              <div class="btns" v-else>
                <el-button size="small" @click="preview()">
                  预览
                </el-button>
                <el-button size="small" @click="download()">
                  下载
                </el-button>
                <el-button size="small" @click="del('hrStaffInformationCertificateList',scope.row)">
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
              <el-input size="small" v-model="ruleForm.rewardsAndPunishments" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="2.个人学习计划" prop="studyPlan">
              <el-input size="small" v-model="ruleForm.studyPlan" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="3.培训情况" prop="training">
              <el-input size="small" v-model="ruleForm.training" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="4.备注" prop="memo">
              <el-input size="small" v-model="ruleForm.memo" type="textarea" resize="none"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <div class="btns">
          <el-button size="small" @click="submit(formRef)">保存</el-button>
          <el-button size="small">取消</el-button>
          <el-button size="small" @click="show">复制链接</el-button>
        </div>

        <span style="margin-bottom: 30px;">到底了~</span>
      </div>
    </div>

  </el-form>
  <test2/>
</template>

<script setup>
import {reactive, ref, inject} from 'vue'
import {ElMessage} from 'element-plus'
import axios from 'axios'

const emitter=inject('mitt')
const show=()=>{
  console.log(11111111111111111111);
  emitter.emit('show',true)
}

const defaultId = {
  id: 0,
  companyId: 186712709016981505,
  organId: 199798025898561536
}
const avatar = ref()
const avatarSrc = ref('')
const formRef = ref()
const ruleForm = reactive({
  id: 0,
  companyId: 186712709016981505,
  organId: 199798025898561536,
  operationId: 0,
  departmentId: 0,
  departmentName: '测试',
  dateWorking: '2022-04-02',
  photo: '',
  name: '',
  sex: 1,
  birthTime: '',
  typeEthnic: '',
  typePolitical: '',
  identityNo: '',
  socialNo: '',
  phone: '',
  email: '',
  tel: '',
  bankname: '',
  account: '',
  address: '',
  stateMarriage: '',
  nativePlace: '',
  postcode: '',
  identityAddress: '',
  typeBlood: '',
  graduatedSchool: '',
  education: '',
  profession: '',
  jobTitle: '',
  foreignLanguageLevel: '',
  computerSkillLevel: '',
  specialty: '',
  interviewDepartment: '',
  interviewJob: '',
  dateWork: '',
  rewardsAndPunishments: '',
  studyPlan: '',
  training: '',
  memo: '',
  hrStaffInformationContactList: [
    {
      name: '',
      relationship: '',
      phone: '',
      ...defaultId
    },
    {
      add: true
    },
  ],
  hrStaffInformationExperienceList: [
    {
      workDate: '',
      companyName: '',
      department: '',
      job: '',
      content: '',
      ...defaultId
    },
    {
      add: true
    },
  ],
  hrStaffInformationFamilyList: [
    {
      relationship: '',
      name: '',
      phone: '',
      companyName: '',
      address: '',
      ...defaultId
    },
    {
      add: true
    },
  ],
  hrStaffInformationCertificateList: [
    {
      certificateTypeName: '',
      no: '',
      dateIssue: '',
      dateEffective: '',
      userName: '',
      ...defaultId
    },
    {
      add: true
    },
  ]
})
const tableList = [
  'hrStaffInformationContactList',
  'hrStaffInformationExperienceList',
  'hrStaffInformationFamilyList',
  'hrStaffInformationCertificateList']
const rules = reactive({
  name: [
    {required: true, message: '请输入姓名', trigger: 'blur'},
    // {pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/, message: '请输入正确姓名', trigger: 'blur'},
  ],
  sex: [
    {required: true, message: '请选择性别', trigger: 'blur'},
  ],
  birthTime: [
    {required: true, message: '请选择出生日期', trigger: 'blur'},
  ],
  identityNo: [
    {required: true, message: '请输入身份证号', trigger: 'blur'},
    {
      // pattern: /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/,
      message: '请输入正确的身份证号', trigger: 'blur'
    },
  ],
  socialNo: [
    {required: true, message: '请输入社保号', trigger: 'blur'},
  ],
  typePolitical: [
    {required: true, message: '请选择政治面貌', trigger: 'blur'},
  ],
  phone: [
    {required: true, message: '请输入手机号', trigger: 'blur'},
    // {pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur'},
  ],
  nativePlace: [
    {required: true, message: '请输入籍贯', trigger: 'blur'},
  ],
  education: [
    {required: true, message: '请输入学历', trigger: 'blur'},
  ],
  interviewDepartment: [
    {required: true, message: '请输入面试部门', trigger: 'blur'},
  ],
  interviewJob: [
    {required: true, message: '请输入面试岗位', trigger: 'blur'},
  ],
  relationship: [
    {required: true, message: '请输入关系', trigger: 'blur'},
  ]
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
const educationOptions = reactive([
  {
    label: '大专',
    value: 1
  },
  {
    label: '本科',
    value: 2
  },
  {
    label: '硕士',
    value: 3
  },
  {
    label: '博士',
    value: 4
  },
])

const tableItems = {
  hrStaffInformationContactListItem: {
    name: '',
    relationship: '',
    phone: '',
    ...defaultId
  },
  hrStaffInformationExperienceListItem: {
    workDate: '',
    companyName: '',
    department: '',
    job: '',
    content: '',
    ...defaultId
  },
  hrStaffInformationFamilyListItem: {
    relationship: '',
    name: '',
    phone: '',
    companyName: '',
    address: '',
    ...defaultId
  },
  hrStaffInformationCertificateListItem: {
    certificateTypeName: '',
    no: '',
    dateIssue: '',
    dateEffective: '',
    userName: '',
    ...defaultId
  }
}
const hrStaffInformationContactList = reactive([
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
const hrStaffInformationExperienceList = reactive([
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
const hrStaffInformationFamilyList = reactive([
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
const hrStaffInformationCertificateList = reactive([
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

const reportDisabledDate=(time) => {
  return time.getTime() <= Date.now()-24*60*60*1000
}
// const workHistoryDisabledDate=(time) => {
//   return time.getTime() > Date.now()
// }
const add = (name) => {
  if (tableList.indexOf(name) === -1) {
    return
  }
  const last = ruleForm[name].pop()
  ruleForm[name].push(JSON.parse(JSON.stringify(tableItems[name + 'Item'])), last)
}
const del = (name, item) => {
  if (tableList.indexOf(name) === -1 || ruleForm[name].length <= 2) {
    return
  }
  const index = ruleForm[name].indexOf(item)
  ruleForm[name].splice(index, 1)
}
const download = () => {
}
const preview = () => {
}
const delAdd = () => {
  const copy = JSON.parse(JSON.stringify(ruleForm))
  tableList.forEach(item => {
    copy[item].pop()
  })
  return copy
}
const formatterDate = (date) => {
  let workHistoryList = date['hrStaffInformationExperienceList']
  if (workHistoryList.length > 0) {
    workHistoryList = workHistoryList.map(item => {
      if (item.workDate !== '' && Array.isArray(item.workDate)) {
        item.workDate = item.workDate.join()
      }
      return item
    })
  }
}

const submit = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const copy = delAdd()
      formatterDate(copy)
      axios.post('http://192.168.199.159/api/staff/v1/save', copy).then(res => {
        const {data} = res
        if (data.code === 200) {
          ElMessage.success('保存成功')
        }
      }, err => {
        console.log(err);
      })
    } else {
      ElMessage.error('验证失败,请检查填写内容')
    }
  })
}
const uploadAvatar = () => {
  avatar.value.click()
}
const getImg = () => {
  let file = avatar.value.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    avatarSrc.value = e.target.result
    ruleForm.photo = avatarSrc.value
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
  min-width: 540px;
  padding: 10px 0 0 0;

  .title {
    margin: 10px 0;
    display: flex;
    align-items: center;

    > div {
      font-size: 25px;
      font-weight: bolder;
      display: flex;
      justify-content: center;

      img {
        width: 180px;
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

.right {
  width: 65%;
  overflow: auto;
  padding-left: 50px;
  padding-right: 20px;

  > span {
    display: inline-block;
    text-align: center;
    width: 100%;
    margin: 10px;
    color: #ccc;
    font-size: 14px;
  }

  &::-webkit-scrollbar {
    // 滚动条的背景
    width: 16px;
    background: #fff;
    height: 14px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    width: 20px;
    border: 5px solid transparent;
  }


  &::-webkit-scrollbar-thumb {
    //滚动条的滑块样式修改
    width: 20px;
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px #cee5ee inset;
  }

  &::-webkit-scrollbar-corner {
    background: #fff;
  }
}

.left {
  width: 35%;
  border-right: 1px solid #ccc;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    // 滚动条的背景
    width: 16px;
    background: #fff;
    height: 14px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    width: 20px;
    border: 5px solid transparent;
  }
  &::-webkit-scrollbar-thumb {
    //滚动条的滑块样式修改
    width: 20px;
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px #cee5ee inset;
  }
  &::-webkit-scrollbar-corner {
    background: #fff;
  }
  .photo {
    width: 120px;
    height: 170px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
}

//:deep(.el-form-item__label) {
//  font-size: 16px !important;
//}
</style>
