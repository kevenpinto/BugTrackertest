const m = require('mithril')

function validate_input(fields){
    //alert("Validator")
    //m('div','In Validator')
    let error_msg = ""
    if(!fields.email){
        error_msg +=  "Email Cannot Be Blank"
        return (false)
    }
    else
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields.email))
        {
            if(!fields.passwd){
                error_msg += "Password Cannot Be Blank"
                return (false)
            }
            return (true)
        }
        else {
            error_msg += "You have entered an invalid email address!"
            return (false)
            }
    }
    if (error_msg){
        alert(error_msg)
        m('div',error_msg)
    }
    return true
  }


class IssuesModel {
  constructor() {
    this.issues = {}
  }
  async loadIssues() {
    let response = await m.request('/issues')
    this.issues = {}
    for (let issue of response.issues) {
      this.issues[issue.id] = issue
    }
    return this.issues
  }
  get list() {
    return Object.keys(this.issues).map(i => this.issues[i])
  }
  async loadIssue(issueId) {
    let response = await m.request(`/issues/${issueId}`)
    this.issues[issueId] = response
    return response
  }
  async updateIssue(issueId, fields) {
    await m.request({
      method: "PUT",
      url: `/issues/${issueId}`,
      data: fields
    })
    return await this.loadIssue(issueId)
  }
  async createIssue(fields) {
    await m.request({
      method: "POST",
      url: `/issues`,
      data: fields
    })
    return await this.loadIssues()
  }
}

class UserModel {
  constructor() {
    //this.issues = {}
    this.email  = ''
    this.passwd = ''
  }
    async createUser(fields) {
        if (validate_input(fields))
        {
            //alert("in if")
            await m.request({
              method: "POST",
              url: `/Register`,
              data: fields
            })
            m.route("/issues")
            m.redraw()
         }
        else {
                alert("in Else")
                m.route.set("/Dashboard")
                m.redraw.strategy("none")
             }
      }
}

class DashboardModel {
  constructor() {
    this.dashlist = {}
  }

  async loadDash() {
    let response = await m.request('/Dashboard')
    this.dashlist = {}
    //alert(response.dashlist.length)
    for (i=0; i<response.dashlist.length; i++) {
        //console.log(response.dashlist[i])
        this.dashlist[i] = response.dashlist[i]
        }
     console.log(this.dashlist)
     //alert(this.dashlist)
     return this.dashlist
  }

  get list() {
    return Object.keys(this.dashlist).map(i => this.dashlist[i])
  }
}


module.exports = {IssuesModel, UserModel, DashboardModel}
