const validate = (values) => {
    const errors = {};

    errors.service_team_name = !values.service_team_name
        ? 'Service Team Name field is required'
        : undefined;

    errors.ref_no = !values.ref_no
        ? 'Ref No: field is required'
        : undefined;

    errors.customer_name = !values.customer_name
        ? 'Customer Name field is required'
        : undefined;

    errors.installation_address = !values.installation_address
        ? 'Installation Address field is required'
        : undefined;

    errors.contact_person = !values.contact_person
        ? 'Contact Person field is required'
        : undefined;

    errors.contact_telephone = !values.contact_telephone
        ? 'Contact Telephone field is required'
        : undefined;

    errors.service_type = !values.service_type
        ? 'Service Type field is required'
        : undefined;

    errors.bandwidth = !values.bandwidth
        ? 'Bandwidth field is required'
        : undefined;

    errors.customer_location = !values.customer_location
        ? 'Customer Location field is required'
        : undefined;

    errors.cable_length = !values.cable_length
        ? 'Cable Length field is required'
        : undefined;

    errors.fat_box_name = !values.fat_box_name
        ? 'FAT Box Name field is required'
        : undefined;

    errors.port_no = !values.port_no
        ? 'Port No: field is required'
        : undefined;

    errors.fat_port_tx = !values.fat_port_tx
        ? 'FAT Port TX field is required'
        : undefined;

    errors.customer_rx = !values.customer_rx
        ? 'Customer RX field is required'
        : undefined;

    errors.onu_loss = !values.onu_loss
        ? 'ONU Loss field is required'
        : undefined;

    errors.new_installation = !values.new_installation
        ? 'New Installation field is required'
        : undefined;

    errors.installation = !values.installation
        ? 'Installation is required'
        : undefined;

    errors.relocation = !values.relocation
        ? 'Relocation field is required'
        : undefined;

    errors.other = !values.other
        ? 'Other field is required'
        : undefined;

    errors.text_status = !values.text_status
        ? 'Task Status field is required'
        : undefined;

    if (values.text_status == 'other' && !values.text_box) {
        errors.text_box = 'Task Box field is required'
    } else {
        errors.text_box = undefined
    }

    errors.arrival_date = !values.arrival_date
        ? 'Date field is required'
        : undefined;

    errors.arrival_time = !values.arrival_time
        ? 'Time field is required'
        : undefined;

    errors.complete_date = !values.complete_date
        ? 'Date field is required'
        : undefined;

    errors.complete_time = !values.complete_time
        ? 'Time field is required'
        : undefined;

    errors.equipment_installed_replaced = !values.equipment_installed_replaced
        ? 'Equipment Installed Replaced field is required'
        : undefined;

    if (!values.serial_no || values.serial_no == 'No Data Here!') {

        errors.serial_no = 'Serial No: field is required';
    } else {
        errors.serial_no = undefined

    }

    errors.asset_no = !values.asset_no
        ? 'Asset No: field is required'
        : undefined;

    errors.service_engineer_cmt = !values.service_engineer_cmt
        ? 'Service Engineer Comment field is required'
        : undefined;

    errors.service_engineer_name = !values.service_engineer_name
        ? 'Service Engineer Name field is required'
        : undefined;

    errors.service_complete_testing = !values.service_complete_testing
        ? 'Service Complete Testing field is required'
        : undefined;

    errors.customer_cmt = !values.customer_cmt
        ? 'Customer Comment field is required'
        : undefined;

    return errors;
}
export default validate