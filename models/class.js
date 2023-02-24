class Class {
    professor_id = null;
    constructor(id, name, professor_id, class_category_id, current_enrollment, max_enrollment) {
        this.id = id;
        this.name = name;
        this.professor_id = professor_id;
        this.class_category_id = class_category_id;
        this.current_enrollment = current_enrollment;
        this.max_enrollment = max_enrollment;
    }
}

export default Class;