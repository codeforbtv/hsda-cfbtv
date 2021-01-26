CREATE TABLE hsds.accessibility_for_disabilities
(
    objectid integer NOT NULL,
    accessibility character varying(255) COLLATE pg_catalog."default",
    details character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


CREATE TABLE hsds.contact
(
    objectid integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default",
    title character varying(255) COLLATE pg_catalog."default",
    department character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    organization_id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    service_at_location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.eligibility
(
    objectid integer NOT NULL,
    eligibility character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


CREATE TABLE hsds.funding
(
    objectid integer NOT NULL,
    source character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    organization_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.language
(
    objectid integer NOT NULL,
    language character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.location
(
    objectid integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default",
    alternate_name character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    transportation character varying(255) COLLATE pg_catalog."default",
    latitude numeric(38,8),
    longitude numeric(38,8),
    id character varying(255) COLLATE pg_catalog."default",
    organization_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.meta_table_descriptions
(
    objectid integer NOT NULL,
    id character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    language character varying(255) COLLATE pg_catalog."default",
    character_set character varying(255) COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.metadata
(
    objectid integer NOT NULL,
    id character varying(255) COLLATE pg_catalog."default",
    resource_id character varying(255) COLLATE pg_catalog."default",
    last_action_date timestamp without time zone,
    last_action_type character varying(255) COLLATE pg_catalog."default",
    field_name character varying(255) COLLATE pg_catalog."default",
    previous_value character varying(255) COLLATE pg_catalog."default",
    replacement_value character varying(255) COLLATE pg_catalog."default",
    updated_by character varying(255) COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.organization
(
    objectid integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default",
    alternate_name character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    url character varying(255) COLLATE pg_catalog."default",
    tax_status character varying(255) COLLATE pg_catalog."default",
    tax_id character varying(255) COLLATE pg_catalog."default",
    year_incorporated timestamp without time zone,
    legal_status character varying(255) COLLATE pg_catalog."default",
    intid smallint,
    id character varying(255) COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.other_attribute
(
    objectid integer NOT NULL,
    id character varying(255) COLLATE pg_catalog."default",
    link_id character varying(255) COLLATE pg_catalog."default",
    link_type character varying(255) COLLATE pg_catalog."default",
    taxonomy_term_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.payment_accepted
(
    objectid integer NOT NULL,
    payment character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.phone
(
    objectid integer NOT NULL,
    "number" character varying(255) COLLATE pg_catalog."default",
    extension smallint,
    type character varying(255) COLLATE pg_catalog."default",
    language character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    department character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    location_id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    organization_id character varying(255) COLLATE pg_catalog."default",
    contact_id character varying(255) COLLATE pg_catalog."default",
    service_at_location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.physical_address
(
    objectid integer NOT NULL,
    attention character varying(255) COLLATE pg_catalog."default",
    address_1 character varying(255) COLLATE pg_catalog."default",
    address_2 character varying(255) COLLATE pg_catalog."default",
    address_3 character varying(255) COLLATE pg_catalog."default",
    address_4 character varying(255) COLLATE pg_catalog."default",
    city character varying(255) COLLATE pg_catalog."default",
    region character varying(255) COLLATE pg_catalog."default",
    state_province character varying(255) COLLATE pg_catalog."default",
    postal_code character varying(255) COLLATE pg_catalog."default",
    country character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.postal_address
(
    objectid integer NOT NULL,
    attention character varying(255) COLLATE pg_catalog."default",
    address_1 character varying(255) COLLATE pg_catalog."default",
    address_2 character varying(255) COLLATE pg_catalog."default",
    address_3 character varying(255) COLLATE pg_catalog."default",
    address_4 character varying(255) COLLATE pg_catalog."default",
    city character varying(255) COLLATE pg_catalog."default",
    region character varying(255) COLLATE pg_catalog."default",
    state_province character varying(255) COLLATE pg_catalog."default",
    postal_code character varying(255) COLLATE pg_catalog."default",
    country character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.program
(
    objectid integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default",
    alternate_name character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    organization_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.required_document
(
    objectid integer NOT NULL,
    document character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.schedule
(
    objectid integer NOT NULL,
    valid_from timestamp without time zone,
    valid_to timestamp without time zone,
    dtstart timestamp without time zone,
    timezone smallint,
    until timestamp without time zone,
    count smallint,
    wkst character varying(255) COLLATE pg_catalog."default",
    freq character varying(255) COLLATE pg_catalog."default",
    "interval" smallint,
    byday character varying(255) COLLATE pg_catalog."default",
    byweekno character varying(255) COLLATE pg_catalog."default",
    bymonthday character varying(255) COLLATE pg_catalog."default",
    byyearday character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    opens_at character varying(255) COLLATE pg_catalog."default",
    closes_at character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    location_id character varying(255) COLLATE pg_catalog."default",
    service_at_location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.service
(
    objectid integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default",
    alternate_name character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    url character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    status character varying(255) COLLATE pg_catalog."default",
    interpretation_services character varying(255) COLLATE pg_catalog."default",
    application_process character varying(255) COLLATE pg_catalog."default",
    wait_time character varying(255) COLLATE pg_catalog."default",
    fees character varying(255) COLLATE pg_catalog."default",
    accreditations character varying(255) COLLATE pg_catalog."default",
    licenses character varying(255) COLLATE pg_catalog."default",
    taxonomy_ids character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    organization_id character varying(255) COLLATE pg_catalog."default",
    program_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.service_area
(
    objectid integer NOT NULL,
    service_area character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.service_at_location
(
    objectid integer NOT NULL,
    description character varying(255) COLLATE pg_catalog."default",
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    location_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE hsds.service_attribute
(
    objectid integer NOT NULL,
    id character varying(255) COLLATE pg_catalog."default",
    service_id character varying(255) COLLATE pg_catalog."default",
    taxonomy_term_id character varying(255) COLLATE pg_catalog."default",
    intid smallint
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


CREATE TABLE hsds.taxonomy_term
(
    objectid integer NOT NULL,
    term character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    taxonomy character varying(255) COLLATE pg_catalog."default",
    language character varying(255) COLLATE pg_catalog."default",
    intid smallint,
    id character varying(255) COLLATE pg_catalog."default",
    parent_id character varying(255) COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;