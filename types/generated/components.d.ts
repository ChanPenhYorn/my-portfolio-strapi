import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactCompContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_comp_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    contacts: Schema.Attribute.Relation<'oneToMany', 'api::contact.contact'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactCompForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_comp_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    button: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    message: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PlatformCompPlatform extends Struct.ComponentSchema {
  collectionName: 'components_platform_comp_platforms';
  info: {
    displayName: 'platform';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceCompServiceComp extends Struct.ComponentSchema {
  collectionName: 'components_service_comp_service_comps';
  info: {
    displayName: 'service-comp';
  };
  attributes: {
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tiitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceCompSocial extends Struct.ComponentSchema {
  collectionName: 'components_service_comp_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    socials: Schema.Attribute.Relation<'oneToMany', 'api::social.social'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TextCompTextComp extends Struct.ComponentSchema {
  collectionName: 'components_text_comp_text_comps';
  info: {
    displayName: 'text-comp';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.button': ButtonButton;
      'contact-comp.contact': ContactCompContact;
      'contact-comp.form': ContactCompForm;
      'platform-comp.platform': PlatformCompPlatform;
      'service-comp.service-comp': ServiceCompServiceComp;
      'service-comp.social': ServiceCompSocial;
      'text-comp.text-comp': TextCompTextComp;
    }
  }
}
