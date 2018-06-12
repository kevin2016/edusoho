import ReactDOM from 'react-dom';
import React from 'react';
import MultiInput from 'app/common/component/multi-input';
import postal from 'postal';

class detail {
  constructor() {
    this.init();
  }

  init() {
    this.initCkeditor();
    this.renderMultiGroupComponent('course-goals', 'goals');
    this.renderMultiGroupComponent('intended-students', 'audiences');
    this.submitForm();
  }

  initCkeditor() {
    let self = this;
    self.editor = CKEDITOR.replace('summary', {
      allowedContent: true,
      toolbar: 'Detail',
      fileSingleSizeLimit: app.fileSingleSizeLimit,
      filebrowserImageUploadUrl: $('#courseset-summary-field').data('imageUploadUrl')
    });

    self.editor.on('blur', () => {
      $('#courseset-summary-field').val(self.editor.getData());
      self.validator.form();
    });
  }

  renderMultiGroupComponent(elementId, name) {
    let datas = $('#' + elementId).data('init-value');
    ReactDOM.render(<MultiInput
      blurIsAdd={true}
      sortable={true}
      dataSource={datas}
      inputName={name + '[]'}
      outputDataElement={name} />,
    document.getElementById(elementId)
    );
  }

  submitForm() {
    this.validator = $('#courseset-detail-form').validate({
      rules: {
        summary: {
          ckeditor_maxlength: 10000,
        },
      }
    });
  }

  publishAddMessage() {
    postal.publish({
      channel: 'courseInfoMultiInput',
      topic: 'addMultiInput',
    });
  }
}

new detail();