import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from '../actions'

class EventsNew extends Component {

  constructor(props){
    super(props)
    // メソッドのインスタンス生成
    // 自前で定義したメソッドは下記の決まり文句でインスタンス生成する必要がある。
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field){
    const {input, label, type, meta: {touched, error} } = field
    // 「...変数」演算子は、変数に指定された配列を展開してメソッドに渡してくれる
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    // pritimne：inputになにもなければ、trueになるboolean
    // submitting：submit押下後、trueになるboolean
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
      </form>
    )
  }

}

const validate = values => {
  const errors = {}
  // values.○○は、name属性とリンクしてる
  if (!values.title) errors.title = "Enter a title please"
  if (!values.body) errors.body = "Enter a body please"

  return errors
}
const mapDispatchToProps = ({ postEvent })

// connectメソッドに渡すと、this.propsに外部のメソッドをbindしてくれるっぽい
// postEventが、このコンポーネントに関連付くactionである、と指定する処理
export default connect(null, mapDispatchToProps)(
  // reduxForm()(ここ)　「ここ」は、reduxFrom()関数が返却する関数の引数になる
  reduxForm({validate, form: 'eventNewForm'})(EventsNew)
)
// export default connect(null, mapDispatchToProps)(EventsNew)
