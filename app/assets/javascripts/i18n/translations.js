var I18n = I18n || {};
I18n.translations = {
    "en": {
        "date": {
            "formats": {
                "default": "%Y-%m-%d",
                "short": "%b %d",
                "long": "%B %d, %Y"
            },
            "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "abbr_day_names": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "month_names": [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "abbr_month_names": [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "order": ["year", "month", "day"]
        },
        "time": {
            "formats": {
                "default": "%a, %d %b %Y %H:%M:%S %z",
                "short": "%d %b %H:%M",
                "long": "%B %d, %Y %H:%M",
                "note_date": "%b %d, %Y"
            },
            "am": "am",
            "pm": "pm"
        },
        "support": {
            "array": {
                "words_connector": ", ",
                "two_words_connector": " and ",
                "last_word_connector": ", and "
            }
        },
        "errors": {
            "format": "%{attribute} %{message}",
            "messages": {
                "inclusion": "is not included in the list",
                "exclusion": "is reserved",
                "invalid": "is invalid",
                "confirmation": "doesn't match confirmation",
                "accepted": "must be accepted",
                "empty": "can't be empty",
                "blank": "can't be blank",
                "too_long": {
                    "one": "is too long (maximum is 1 character)",
                    "other": "is too long (maximum is %{count} characters)"
                },
                "too_short": {
                    "one": "is too short (minimum is 1 character)",
                    "other": "is too short (minimum is %{count} characters)"
                },
                "wrong_length": {
                    "one": "is the wrong length (should be 1 character)",
                    "other": "is the wrong length (should be %{count} characters)"
                },
                "not_a_number": "is not a number",
                "not_an_integer": "must be an integer",
                "greater_than": "must be greater than %{count}",
                "greater_than_or_equal_to": "must be greater than or equal to %{count}",
                "equal_to": "must be equal to %{count}",
                "less_than": "must be less than %{count}",
                "less_than_or_equal_to": "must be less than or equal to %{count}",
                "odd": "must be odd",
                "even": "must be even",
                "record_invalid": "Validation failed: %{errors}",
                "taken": "has already been taken",
                "expired": "has expired, please request a new one",
                "not_found": "not found",
                "already_confirmed": "was already confirmed",
                "not_locked": "was not locked",
                "not_saved": {
                    "one": "1 error prohibited this %{resource} from being saved:",
                    "other": "%{count} errors prohibited this %{resource} from being saved:"
                }
            },
            "template": {
                "body": "There were problems with the following fields:",
                "header": {
                    "one": "1 error prohibited this %{model} from being saved",
                    "other": "%{count} errors prohibited this %{model} from being saved"
                }
            }
        },
        "activerecord": {
            "errors": {
                "messages": {
                    "taken": "has already been taken",
                    "record_invalid": "Validation failed: %{errors}",
                    "accepted": "must be accepted",
                    "blank": "can't be blank",
                    "confirmation": "doesn't match confirmation",
                    "empty": "can't be empty",
                    "equal_to": "must be equal to %{count}",
                    "even": "must be even",
                    "exclusion": "is reserved",
                    "greater_than": "must be greater than %{count}",
                    "greater_than_or_equal_to": "must be greater than or equal to %{count}",
                    "inclusion": "is not included in the list",
                    "invalid": "is invalid",
                    "less_than": "must be less than %{count}",
                    "less_than_or_equal_to": "must be less than or equal to %{count}",
                    "not_a_number": "is not a number",
                    "not_an_integer": "must be an integer",
                    "odd": "must be odd",
                    "too_long": {
                        "one": "is too long (maximum is 1 character)",
                        "other": "is too long (maximum is %{count} characters)"
                    },
                    "too_short": {
                        "one": "is too short (minimum is 1 character)",
                        "other": "is too short (minimum is %{count} characters)"
                    },
                    "wrong_length": {
                        "one": "is the wrong length (should be 1 character)",
                        "other": "is the wrong length (should be %{count} characters)"
                    }
                },
                "format": "%{attribute} %{message}",
                "template": {
                    "body": "There were problems with the following fields:",
                    "header": {
                        "one": "1 error prohibited this %{model} from being saved",
                        "other": "%{count} errors prohibited this %{model} from being saved"
                    }
                }
            },
            "models": {
                "user": {
                    "one": "Member",
                    "other": "Members"
                },
                "project": {
                    "one": "Project",
                    "other": "Projects"
                },
                "story": {
                    "one": "Story",
                    "other": "Stories"
                }
            },
            "attributes": {
                "note": {
                    "note": "Note"
                },
                "project": {
                    "name": "Name",
                    "point_scale": "Point scale",
                    "start_date": "Start date",
                    "iteration_start_day": "Iteration start day",
                    "iteration_length": "Iteration length",
                    "default_velocity": "Default velocity"
                },
                "story": {
                    "title": "Title",
                    "description": "Description",
                    "estimate": "Estimate",
                    "story_type": "Story type",
                    "state": "State",
                    "accepted_at": "Accepted at",
                    "position": "Position",
                    "labels": "Labels",
                    "requested_by": "Requested by",
                    "owned_by": "Owned by"
                }
            }
        },
        "number": {
            "format": {
                "separator": ".",
                "delimiter": ",",
                "precision": 3,
                "significant": false,
                "strip_insignificant_zeros": false
            },
            "currency": {
                "format": {
                    "format": "%u%n",
                    "unit": "$",
                    "separator": ".",
                    "delimiter": ",",
                    "precision": 2,
                    "significant": false,
                    "strip_insignificant_zeros": false
                }
            },
            "percentage": {
                "format": {
                    "delimiter": ""
                }
            },
            "precision": {
                "format": {
                    "delimiter": ""
                }
            },
            "human": {
                "format": {
                    "delimiter": "",
                    "precision": 3,
                    "significant": true,
                    "strip_insignificant_zeros": true
                },
                "storage_units": {
                    "format": "%n %u",
                    "units": {
                        "byte": {
                            "one": "Byte",
                            "other": "Bytes"
                        },
                        "kb": "KB",
                        "mb": "MB",
                        "gb": "GB",
                        "tb": "TB"
                    }
                },
                "decimal_units": {
                    "format": "%n %u",
                    "units": {
                        "unit": "",
                        "thousand": "Thousand",
                        "million": "Million",
                        "billion": "Billion",
                        "trillion": "Trillion",
                        "quadrillion": "Quadrillion"
                    }
                }
            }
        },
        "datetime": {
            "distance_in_words": {
                "half_a_minute": "half a minute",
                "less_than_x_seconds": {
                    "one": "less than 1 second",
                    "other": "less than %{count} seconds"
                },
                "x_seconds": {
                    "one": "1 second",
                    "other": "%{count} seconds"
                },
                "less_than_x_minutes": {
                    "one": "less than a minute",
                    "other": "less than %{count} minutes"
                },
                "x_minutes": {
                    "one": "1 minute",
                    "other": "%{count} minutes"
                },
                "about_x_hours": {
                    "one": "about 1 hour",
                    "other": "about %{count} hours"
                },
                "x_days": {
                    "one": "1 day",
                    "other": "%{count} days"
                },
                "about_x_months": {
                    "one": "about 1 month",
                    "other": "about %{count} months"
                },
                "x_months": {
                    "one": "1 month",
                    "other": "%{count} months"
                },
                "about_x_years": {
                    "one": "about 1 year",
                    "other": "about %{count} years"
                },
                "over_x_years": {
                    "one": "over 1 year",
                    "other": "over %{count} years"
                },
                "almost_x_years": {
                    "one": "almost 1 year",
                    "other": "almost %{count} years"
                }
            },
            "prompts": {
                "year": "Year",
                "month": "Month",
                "day": "Day",
                "hour": "Hour",
                "minute": "Minute",
                "second": "Seconds"
            }
        },
        "helpers": {
            "select": {
                "prompt": "Please select"
            },
            "submit": {
                "create": "Create %{model}",
                "update": "Update %{model}",
                "submit": "Save %{model}"
            },
            "button": {
                "create": "Create %{model}",
                "update": "Update %{model}",
                "submit": "Save %{model}"
            }
        },
        "activemodel": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "must be accepted",
                    "blank": "can't be blank",
                    "confirmation": "doesn't match confirmation",
                    "empty": "can't be empty",
                    "equal_to": "must be equal to %{count}",
                    "even": "must be even",
                    "exclusion": "is reserved",
                    "greater_than": "must be greater than %{count}",
                    "greater_than_or_equal_to": "must be greater than or equal to %{count}",
                    "inclusion": "is not included in the list",
                    "invalid": "is invalid",
                    "less_than": "must be less than %{count}",
                    "less_than_or_equal_to": "must be less than or equal to %{count}",
                    "not_a_number": "is not a number",
                    "not_an_integer": "must be an integer",
                    "odd": "must be odd",
                    "record_invalid": "Validation failed: %{errors}",
                    "taken": "has already been taken",
                    "too_long": {
                        "one": "is too long (maximum is 1 character)",
                        "other": "is too long (maximum is %{count} characters)"
                    },
                    "too_short": {
                        "one": "is too short (minimum is 1 character)",
                        "other": "is too short (minimum is %{count} characters)"
                    },
                    "wrong_length": {
                        "one": "is the wrong length (should be 1 character)",
                        "other": "is the wrong length (should be %{count} characters)"
                    }
                },
                "template": {
                    "body": "There were problems with the following fields:",
                    "header": {
                        "one": "1 error prohibited this %{model} from being saved",
                        "other": "%{count} errors prohibited this %{model} from being saved"
                    }
                }
            }
        },
        "i18n": {
            "plural": {
                "keys": ["one", "other"],
                "rule": {}
            }
        },
        "devise": {
            "failure": {
                "already_authenticated": "You are already signed in.",
                "unauthenticated": "You need to sign in or sign up before continuing.",
                "unconfirmed": "You have to confirm your account before continuing.",
                "locked": "Your account is locked.",
                "invalid": "Invalid email or password.",
                "invalid_token": "Invalid authentication token.",
                "timeout": "Your session expired, please sign in again to continue.",
                "inactive": "Your account was not activated yet."
            },
            "sessions": {
                "signed_in": "Signed in successfully.",
                "signed_out": "Signed out successfully."
            },
            "passwords": {
                "send_instructions": "You will receive an email with instructions about how to reset your password in a few minutes.",
                "updated": "Your password was changed successfully. You are now signed in.",
                "updated_not_active": "Your password was changed successfully.",
                "send_paranoid_instructions": "If your e-mail exists on our database, you will receive a password recovery link on your e-mail"
            },
            "confirmations": {
                "send_instructions": "You will receive an email with instructions about how to confirm your account in a few minutes.",
                "send_paranoid_instructions": "If your e-mail exists on our database, you will receive an email with instructions about how to confirm your account in a few minutes.",
                "confirmed": "Your account was successfully confirmed. Please set a password to complete the sign up process.",
                "invalid_token": "Invalid confirmation token."
            },
            "registrations": {
                "signed_up": "You have signed up successfully. If enabled, a confirmation was sent to your e-mail.",
                "signed_up_but_unconfirmed": "You have signed up successfully. A confirmation was sent to your e-mail. Please follow the contained instructions to activate your account.",
                "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
                "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
                "updated": "You updated your account successfully.",
                "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
                "destroyed": "Bye! Your account was successfully cancelled. We hope to see you again soon."
            },
            "unlocks": {
                "send_instructions": "You will receive an email with instructions about how to unlock your account in a few minutes.",
                "unlocked": "Your account was successfully unlocked. You are now signed in.",
                "send_paranoid_instructions": "If your account exists, you will receive an email with instructions about how to unlock it in a few minutes."
            },
            "omniauth_callbacks": {
                "success": "Successfully authorized from %{kind} account.",
                "failure": "Could not authorize you from %{kind} because \"%{reason}\"."
            },
            "mailer": {
                "confirmation_instructions": {
                    "subject": "Confirmation instructions"
                },
                "reset_password_instructions": {
                    "subject": "Reset password instructions"
                },
                "unlock_instructions": {
                    "subject": "Unlock Instructions"
                }
            }
        },
        "fulcrum": "Fulcrum",
        "log out": "Log out",
        "log in": "Log in",
        "sign up": "Sign up",
        "edit": "Edit",
        "delete": "Delete",
        "back": "Back",
        "import": "Import",
        "export": "Export",
        "revert": "Revert",
        "apply": "Apply",
        "velocity": "Velocity",
        "notes": "Notes",
        "tasks": "Tasks",
        "close": "Close",
        "points": "Points",
        "saving": "Saving ...",
        "expand": "Expand",
        "author unknown": "Author Unknown",
        "add story": "Add story",
        "save error": "Save error",
        "override velocity": "Override velocity",
        "story title": "Story title",
        "requested on date": "Requested on {{date}}",
        "requested by user on date": "Requested by {{user}} on {{date}}",
        "imported n stories": {
            "one": "Imported 1 story",
            "other": "Imported %{count} stories"
        },
        "n stories failed to import": {
            "one": "1 story failed to import",
            "other": "%{count} stories failed to import"
        },
        "n weeks": {
            "one": "1 week",
            "other": "%{count} weeks"
        },
        "projects": {
            "new project": "New Project",
            "edit project": "Edit Project",
            "project properties": "Project Properties",
            "project was successfully created": "Project was successfully created.",
            "project was successfully updated": "Project was successfully updated.",
            "index": {
                "listing projects": "Listing Projects",
                "are you sure you want to delete this project": "Are you sure you want to delete this project?  This action cannot be undone.",
                "the iteration starts on x with length of x weeks": {
                    "one": "Iterations start on %{day} with a length of 1 week",
                    "other": "Iterations start on %{day} with a length of %{count} weeks"
                }
            },
            "show": {
                "done": "Done",
                "in_progress": "In Progress",
                "backlog": "Backlog",
                "icebox": "Chilly Bin"
            }
        },
        "registrations": {
            "edit": {
                "leave_blank_if_you_dont_want_to_change_it": "Leave blank if you don't want to change it",
                "notify_me_when_my_stories_are": "Notify me when my stories are",
                "we_need_your_current_password_to_confirm_your_changes": "We need your current password to confirm your changes."
            }
        }
    },
    "de": {
        "date": {
            "abbr_day_names": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            "abbr_month_names": [null, "Jan", "Feb", "M\u00e4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            "day_names": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            "formats": {
                "default": "%d.%m.%Y",
                "long": "%e. %B %Y",
                "short": "%e. %b"
            },
            "month_names": [null, "Januar", "Februar", "M\u00e4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            "order": ["day", "month", "year"]
        },
        "datetime": {
            "distance_in_words": {
                "about_x_hours": {
                    "one": "etwa eine Stunde",
                    "other": "etwa %{count} Stunden"
                },
                "about_x_months": {
                    "one": "etwa ein Monat",
                    "other": "etwa %{count} Monate"
                },
                "about_x_years": {
                    "one": "etwa ein Jahr",
                    "other": "etwa %{count} Jahre"
                },
                "almost_x_years": {
                    "one": "fast ein Jahr",
                    "other": "fast %{count} Jahre"
                },
                "half_a_minute": "eine halbe Minute",
                "less_than_x_minutes": {
                    "one": "weniger als eine Minute",
                    "other": "weniger als %{count} Minuten"
                },
                "less_than_x_seconds": {
                    "one": "weniger als eine Sekunde",
                    "other": "weniger als %{count} Sekunden"
                },
                "over_x_years": {
                    "one": "mehr als ein Jahr",
                    "other": "mehr als %{count} Jahre"
                },
                "x_days": {
                    "one": "ein Tag",
                    "other": "%{count} Tage"
                },
                "x_minutes": {
                    "one": "eine Minute",
                    "other": "%{count} Minuten"
                },
                "x_months": {
                    "one": "ein Monat",
                    "other": "%{count} Monate"
                },
                "x_seconds": {
                    "one": "eine Sekunde",
                    "other": "%{count} Sekunden"
                }
            },
            "prompts": {
                "day": "Tag",
                "hour": "Stunden",
                "minute": "Minuten",
                "month": "Monat",
                "second": "Sekunden",
                "year": "Jahr"
            }
        },
        "errors": {
            "format": "%{attribute} %{message}",
            "messages": {
                "accepted": "muss akzeptiert werden",
                "blank": "muss ausgef\u00fcllt werden",
                "confirmation": "stimmt nicht mit der Best\u00e4tigung \u00fcberein",
                "empty": "muss ausgef\u00fcllt werden",
                "equal_to": "muss genau %{count} sein",
                "even": "muss gerade sein",
                "exclusion": "ist nicht verf\u00fcgbar",
                "greater_than": "muss gr\u00f6\u00dfer als %{count} sein",
                "greater_than_or_equal_to": "muss gr\u00f6\u00dfer oder gleich %{count} sein",
                "inclusion": "ist kein g\u00fcltiger Wert",
                "invalid": "ist nicht g\u00fcltig",
                "less_than": "muss kleiner als %{count} sein",
                "less_than_or_equal_to": "muss kleiner oder gleich %{count} sein",
                "not_a_number": "ist keine Zahl",
                "not_an_integer": "muss ganzzahlig sein",
                "odd": "muss ungerade sein",
                "record_invalid": "G\u00fcltigkeitspr\u00fcfung ist fehlgeschlagen: %{errors}",
                "taken": "ist bereits vergeben",
                "too_long": "ist zu lang (nicht mehr als %{count} Zeichen)",
                "too_short": "ist zu kurz (nicht weniger als %{count} Zeichen)",
                "wrong_length": "hat die falsche L\u00e4nge (muss genau %{count} Zeichen haben)",
                "not_found": "nicht gefunden",
                "already_confirmed": "wurde bereits best\u00e4tigt",
                "not_locked": "war nicht gesperrt"
            },
            "template": {
                "body": "Bitte \u00fcberpr\u00fcfen Sie die folgenden Felder:",
                "header": {
                    "one": "Konnte %{model} nicht speichern: ein Fehler.",
                    "other": "Konnte %{model} nicht speichern: %{count} Fehler."
                }
            }
        },
        "helpers": {
            "select": {
                "prompt": "Bitte w\u00e4hlen"
            },
            "submit": {
                "create": "%{model} erstellen",
                "submit": "%{model} speichern",
                "update": "%{model} aktualisieren"
            }
        },
        "number": {
            "currency": {
                "format": {
                    "delimiter": ".",
                    "format": "%n %u",
                    "precision": 2,
                    "separator": ",",
                    "significant": false,
                    "strip_insignificant_zeros": false,
                    "unit": "\u20ac"
                }
            },
            "format": {
                "delimiter": ".",
                "precision": 2,
                "separator": ",",
                "significant": false,
                "strip_insignificant_zeros": false
            },
            "human": {
                "decimal_units": {
                    "format": "%n %u",
                    "units": {
                        "billion": {
                            "one": "Milliarde",
                            "other": "Milliarden"
                        },
                        "million": "Millionen",
                        "quadrillion": {
                            "one": "Billiarde",
                            "other": "Billiarden"
                        },
                        "thousand": "Tausend",
                        "trillion": "Billionen",
                        "unit": ""
                    }
                },
                "format": {
                    "delimiter": "",
                    "precision": 1,
                    "significant": true,
                    "strip_insignificant_zeros": true
                },
                "storage_units": {
                    "format": "%n %u",
                    "units": {
                        "byte": {
                            "one": "Byte",
                            "other": "Bytes"
                        },
                        "gb": "GB",
                        "kb": "KB",
                        "mb": "MB",
                        "tb": "TB"
                    }
                }
            },
            "percentage": {
                "format": {
                    "delimiter": ""
                }
            },
            "precision": {
                "format": {
                    "delimiter": ""
                }
            }
        },
        "support": {
            "array": {
                "last_word_connector": " und ",
                "two_words_connector": " und ",
                "words_connector": ", "
            }
        },
        "time": {
            "am": "vormittags",
            "formats": {
                "default": "%A, %d. %B %Y, %H:%M Uhr",
                "long": "%A, %d. %B %Y, %H:%M Uhr",
                "short": "%d. %B, %H:%M Uhr",
                "note_date": "%b %d, %Y"
            },
            "pm": "nachmittags"
        },
        "activemodel": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "muss akzeptiert werden",
                    "blank": "muss ausgef\u00fcllt werden",
                    "confirmation": "stimmt nicht mit der Best\u00e4tigung \u00fcberein",
                    "empty": "muss ausgef\u00fcllt werden",
                    "equal_to": "muss genau %{count} sein",
                    "even": "muss gerade sein",
                    "exclusion": "ist nicht verf\u00fcgbar",
                    "greater_than": "muss gr\u00f6\u00dfer als %{count} sein",
                    "greater_than_or_equal_to": "muss gr\u00f6\u00dfer oder gleich %{count} sein",
                    "inclusion": "ist kein g\u00fcltiger Wert",
                    "invalid": "ist nicht g\u00fcltig",
                    "less_than": "muss kleiner als %{count} sein",
                    "less_than_or_equal_to": "muss kleiner oder gleich %{count} sein",
                    "not_a_number": "ist keine Zahl",
                    "not_an_integer": "muss ganzzahlig sein",
                    "odd": "muss ungerade sein",
                    "record_invalid": "G\u00fcltigkeitspr\u00fcfung ist fehlgeschlagen: %{errors}",
                    "taken": "ist bereits vergeben",
                    "too_long": "ist zu lang (nicht mehr als %{count} Zeichen)",
                    "too_short": "ist zu kurz (nicht weniger als %{count} Zeichen)",
                    "wrong_length": "hat die falsche L\u00e4nge (muss genau %{count} Zeichen haben)"
                },
                "template": {
                    "body": "Bitte \u00fcberpr\u00fcfen Sie die folgenden Felder:",
                    "header": {
                        "one": "Konnte %{model} nicht speichern: ein Fehler.",
                        "other": "Konnte %{model} nicht speichern: %{count} Fehler."
                    }
                }
            }
        },
        "activerecord": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "muss akzeptiert werden",
                    "blank": "muss ausgef\u00fcllt werden",
                    "confirmation": "stimmt nicht mit der Best\u00e4tigung \u00fcberein",
                    "empty": "muss ausgef\u00fcllt werden",
                    "equal_to": "muss genau %{count} sein",
                    "even": "muss gerade sein",
                    "exclusion": "ist nicht verf\u00fcgbar",
                    "greater_than": "muss gr\u00f6\u00dfer als %{count} sein",
                    "greater_than_or_equal_to": "muss gr\u00f6\u00dfer oder gleich %{count} sein",
                    "inclusion": "ist kein g\u00fcltiger Wert",
                    "invalid": "ist nicht g\u00fcltig",
                    "less_than": "muss kleiner als %{count} sein",
                    "less_than_or_equal_to": "muss kleiner oder gleich %{count} sein",
                    "not_a_number": "ist keine Zahl",
                    "not_an_integer": "muss ganzzahlig sein",
                    "odd": "muss ungerade sein",
                    "record_invalid": "G\u00fcltigkeitspr\u00fcfung ist fehlgeschlagen: %{errors}",
                    "taken": "ist bereits vergeben",
                    "too_long": "ist zu lang (nicht mehr als %{count} Zeichen)",
                    "too_short": "ist zu kurz (nicht weniger als %{count} Zeichen)",
                    "wrong_length": "hat die falsche L\u00e4nge (muss genau %{count} Zeichen haben)"
                },
                "template": {
                    "body": "Bitte \u00fcberpr\u00fcfen Sie die folgenden Felder:",
                    "header": {
                        "one": "Konnte %{model} nicht speichern: ein Fehler.",
                        "other": "Konnte %{model} nicht speichern: %{count} Fehler."
                    }
                }
            },
            "models": {
                "user": {
                    "one": "Mitglied",
                    "other": "Mitglieder"
                },
                "project": {
                    "one": "Projekt",
                    "other": "Projekte"
                },
                "story": {
                    "one": "Story",
                    "other": "Stories"
                }
            },
            "attributes": {
                "note": {
                    "note": "Notiz"
                },
                "project": {
                    "name": "Name",
                    "point_scale": "Punkte Scala",
                    "start_date": "Startdatum",
                    "iteration_start_day": "Iterationsstarttag",
                    "iteration_length": "Iterationsl\u00e4nge",
                    "default_velocity": "Standard Geschwindigkeit"
                },
                "story": {
                    "title": "Titel",
                    "description": "Beschreibung",
                    "estimate": "Sch\u00e4tzung",
                    "story_type": "Story-Typ",
                    "state": "Zustand",
                    "accepted_at": "Angenommen am",
                    "position": "Position",
                    "labels": "Labels",
                    "requested_by": "Beantragt von",
                    "owned_by": "Besitzt von"
                }
            }
        },
        "i18n": {
            "plural": {
                "keys": ["one", "other"],
                "rule": {}
            }
        },
        "fulcrum": "Fulcrum",
        "log out": "Abmelden",
        "log in": "Anmelden",
        "sign up": "Registrieren",
        "edit": "Barbeiten",
        "delete": "L\u00f6schen",
        "back": "Zur\u00fcck",
        "import": "Importieren",
        "export": "Exportieren",
        "revert": "Zur\u00fccksetzen",
        "apply": "Anwenden",
        "velocity": "Geschwindigkeit",
        "notes": "Notizen",
        "close": "Schliessen",
        "points": "Punkte",
        "saving": "Speichern ...",
        "expand": "Expandieren",
        "author unknown": "Unbekanter Autor",
        "add story": "Story Hinzuf\u00fcgen",
        "save error": "Speicher Fehler",
        "override velocity": "Geschwindigkeit Erzwingen",
        "story title": "Titel",
        "requested on date": "Beantragt am {{date}}",
        "requested by user on date": "Beantragt bei {{user}} am {{date}}",
        "imported n stories": {
            "one": "1 Story Importiert",
            "other": "%{count} Stories Importiert"
        },
        "n stories failed to import": {
            "one": "1 Story scheiterte beim Import",
            "other": "%{count} Stories scheiterte beim Import"
        },
        "n weeks": {
            "one": "1 Woche",
            "other": "%{count} Wochen"
        },
        "projects": {
            "new project": "Neues Projekt",
            "edit project": "Projekt Bearbeiten",
            "project properties": "Projekt Eigentschaften",
            "project was successfully created": "Projekt wurde erfolgreich erzeugt.",
            "project was successfully updated": "Projekt wurde erfolgreich aktualisiert.",
            "index": {
                "listing projects": "Listing Projects",
                "are you sure you want to delete this project": "Sind Sie sicher das sie das Projekt l\u00f6schen wollen? Diese Aktion kann nicht r\u00fcckg\u00e4nig gemacht werden.",
                "the iteration starts on x with length of x weeks": {
                    "one": "Iteration f\u00e4ngt am %{day} mit der l\u00e4nge einer Woche",
                    "other": "Iteration f\u00e4ngt am %{day} mit der l\u00e4nge von %{count} Wochen"
                }
            },
            "show": {
                "done": "Fertig",
                "in_progress": "Laufend",
                "backlog": "R\u00fcckstand",
                "icebox": "Kalte Kiste"
            }
        },
        "registrations": {
            "edit": {
                "leave_blank_if_you_dont_want_to_change_it": "Lassen Sie es leer wenn Sie es nicht barbeiten wollen.",
                "notify_me_when_my_stories_are": "Benachrichtige mich wenn meine Stories",
                "we_need_your_current_password_to_confirm_your_changes": "Wir brauchen dein aktuelles Passwort um die \u00c4nderungen zu best\u00e4tigen."
            }
        },
        "devise": {
            "failure": {
                "unauthenticated": "Sie m\u00fcssen sich anmelden oder registrieren, bevor Sie fortfahren k\u00f6nnen.",
                "unconfirmed": "Sie m\u00fcssen ihr Konto best\u00e4tigen bevor sie fortfahren k\u00f6nnen.",
                "locked": "Ihr Konto wurde gesperrt.",
                "invalid": "Ung\u00fcltige E-Mail oder ung\u00fcltiges Passwort.",
                "invalid_token": "Ung\u00fcltige Authentifizierungs-Token.",
                "timeout": "Ihre Sitzung ist abgelaufen, bitte melden Sie sich erneut, um fortzufahren.",
                "inactive": "Ihr Konto wurde noch nicht aktiviert."
            },
            "sessions": {
                "signed_in": "Erfolgreich angemeldet.",
                "signed_out": "Erfolgreich abgemeldet."
            },
            "passwords": {
                "send_instructions": "Sie erhalten eine E-Mail mit Anweisungen, wie Sie Ihr Passwort in K\u00fcrze zur\u00fccksetzen k\u00f6nnen.",
                "updated": "Ihr Passwort wurde erfolgreich ge\u00e4ndert. Sie sind jetzt angemeldet."
            },
            "confirmations": {
                "send_instructions": "Sie erhalten eine E-Mail mit Anweisungen, wie sie ihr Konto best\u00e4tigen k\u00f6nnen.",
                "confirmed": "Ihr Konto wurde erfolgreich best\u00e4tigt. Sie sind jetzt angemeldet."
            },
            "registrations": {
                "signed_up": "Sie haben sich erfolgreich angemeldet. Wenn aktiviert wurde eine Bet\u00e4tigung per E-Mail geschickt.",
                "updated": "Ihr Konto wurde erfolgreich aktiviert.",
                "destroyed": "Tsch\u00fcss! Ihr Konto wurde erfolgreich gel\u00f6scht. Wir hoffen sie bald wieder zu sehen."
            },
            "unlocks": {
                "send_instructions": "Sie erhalten eine E-Mail mit Anweisungen, wie sie ihr Konto entsperren k\u00f6nnen.",
                "unlocked": "Ihr Konto wurde erfolgreich entsperrt. Sie sind jetzt angemeldet."
            },
            "mailer": {
                "confirmation_instructions": {
                    "subject": "Best\u00e4tigungs-Anweisungen"
                },
                "reset_password_instructions": {
                    "subject": "Passwortr\u00fccksetz-Anweisungen"
                },
                "unlock_instructions": {
                    "subject": "Entsper-Anweisungen"
                }
            }
        }
    },
    "el": {
        "date": {
            "abbr_day_names": ["\u039a\u03c5\u03c1", "\u0394\u03b5\u03c5", "\u03a4\u03c1\u03b9", "\u03a4\u03b5\u03c4", "\u03a0\u03b5\u03bc", "\u03a0\u03b1\u03c1", "\u03a3\u03b1\u03b2"],
            "abbr_month_names": [null, "\u0399\u03b1\u03bd.", "\u03a6\u03b5\u03b2.", "\u039c\u03b1\u03c1.", "\u0391\u03c0\u03c1.", "\u039c\u03b1\u03b9.", "\u0399\u03bf\u03c5\u03bd.", "\u0399\u03bf\u03cd\u03bb.", "\u0391\u03c5\u03b3.", "\u03a3\u03b5\u03c0.", "\u039f\u03ba\u03c4.", "\u039d\u03bf\u03b5.", "\u0394\u03b5\u03ba."],
            "day_names": ["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae", "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1", "\u03a4\u03c1\u03af\u03c4\u03b7", "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7", "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7", "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae", "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"],
            "formats": {
                "default": "%d/%m/%Y",
                "long": "%e %B %Y",
                "short": "%d %b"
            },
            "month_names": [null, "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2", "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2", "\u039c\u03ac\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2", "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2", "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"],
            "order": ["day", "month", "year"]
        },
        "datetime": {
            "distance_in_words": {
                "about_x_hours": {
                    "one": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 \u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
                    "other": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 %{count} \u03ce\u03c1\u03b5\u03c2"
                },
                "about_x_months": {
                    "one": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 \u03ad\u03bd\u03b1 \u03bc\u03ae\u03bd\u03b1",
                    "other": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 %{count} \u03bc\u03ae\u03bd\u03b5\u03c2"
                },
                "about_x_years": {
                    "one": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                    "other": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 %{count} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                },
                "almost_x_years": {
                    "one": "\u03c3\u03c7\u03b5\u03b4\u03cc\u03bd \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                    "other": "\u03c3\u03c7\u03b5\u03b4\u03cc\u03bd %{count} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                },
                "half_a_minute": "\u03bc\u03b9\u03c3\u03cc \u03bb\u03b5\u03c0\u03c4\u03cc",
                "less_than_x_minutes": {
                    "one": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                    "other": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count} \u03bb\u03b5\u03c0\u03c4\u03ac"
                },
                "less_than_x_seconds": {
                    "one": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
                    "other": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count} \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"
                },
                "over_x_years": {
                    "one": "\u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                    "other": "\u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc %{count} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                },
                "x_days": {
                    "one": "1 \u03bc\u03ad\u03c1\u03b1",
                    "other": "%{count} \u03bc\u03ad\u03c1\u03b5\u03c2"
                },
                "x_minutes": {
                    "one": "1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                    "other": "%{count} \u03bb\u03b5\u03c0\u03c4\u03ac"
                },
                "x_months": {
                    "one": "1 \u03bc\u03ae\u03bd\u03b1",
                    "other": "%{count} \u03bc\u03ae\u03bd\u03b5\u03c2"
                },
                "x_seconds": {
                    "one": "1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
                    "other": "%{count} \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"
                }
            },
            "prompts": {
                "day": "\u0397\u03bc\u03ad\u03c1\u03b1",
                "hour": "\u038f\u03c1\u03b1",
                "minute": "\u039b\u03b5\u03c0\u03c4\u03cc",
                "month": "\u039c\u03ae\u03bd\u03b1\u03c2",
                "second": "\u0394\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
                "year": "\u0388\u03c4\u03bf\u03c2"
            }
        },
        "errors": {
            "format": "%{attribute} %{message}",
            "messages": {
                "accepted": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b4\u03b5\u03ba\u03c4\u03cc",
                "blank": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
                "confirmation": "\u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
                "empty": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03b4\u03b5\u03b9\u03bf",
                "equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                "even": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
                "exclusion": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b5\u03c3\u03bc\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf",
                "greater_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                "greater_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                "inclusion": "\u03b4\u03b5\u03bd \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
                "invalid": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf",
                "less_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                "less_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                "not_a_number": "\u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                "not_an_integer": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                "odd": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c4\u03c4\u03cc\u03c2",
                "record_invalid": "\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5: %{errors}",
                "taken": "\u03c4\u03bf \u03ad\u03c7\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9",
                "too_long": {
                    "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                    "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                },
                "too_short": {
                    "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                    "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                },
                "wrong_length": {
                    "one": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                    "other": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                },
                "expired": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03ae\u03be\u03b5\u03b9, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b6\u03b7\u03c4\u03b5\u03af\u03c3\u03c4\u03b5 \u03ba\u03b1\u03b9\u03bd\u03bf\u03cd\u03c1\u03b3\u03b9\u03bf",
                "not_found": "\u03b4\u03b5\u03bd \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b5",
                "already_confirmed": "\u03ad\u03c7\u03b5\u03b9 \u03ae\u03b4\u03b7 \u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b4\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03c4\u03b5 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af\u03c4\u03b5",
                "not_locked": "\u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03bb\u03b5\u03b9\u03b4\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2",
                "not_saved": {
                    "one": "1 \u03bb\u03ac\u03b8\u03bf\u03c2 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{resource} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af:",
                    "other": "%{count} \u03bb\u03ac\u03b8\u03b7 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b1\u03bd \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{resource} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af."
                }
            },
            "template": {
                "body": "\u03a5\u03c0\u03ae\u03c1\u03be\u03b1\u03bd \u03c0\u03c1\u03bf\u03b2\u03bb\u03ae\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1:",
                "header": {
                    "one": "1 \u03bb\u03ac\u03b8\u03bf\u03c2 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af.",
                    "other": "%{count} \u03bb\u03ac\u03b8\u03b7 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b1\u03bd \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03c4\u03b5\u03af."
                }
            }
        },
        "helpers": {
            "select": {
                "prompt": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5"
            },
            "submit": {
                "create": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03c3\u03c4\u03b5 %{model}",
                "submit": "\u0391\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c3\u03c4\u03b5 %{model}",
                "update": "\u0395\u03bd\u03b7\u03bc\u03b5\u03c1\u03ce\u03c3\u03c4\u03b5 %{model}"
            }
        },
        "number": {
            "currency": {
                "format": {
                    "delimiter": ",",
                    "format": "%n %u",
                    "precision": 2,
                    "separator": ".",
                    "significant": false,
                    "strip_insignificant_zeros": false,
                    "unit": "\u20ac"
                }
            },
            "format": {
                "delimiter": ".",
                "precision": 3,
                "separator": ",",
                "significant": false,
                "strip_insignificant_zeros": false
            },
            "human": {
                "decimal_units": {
                    "format": "%n %u",
                    "units": {
                        "billion": "\u03b4\u03b9\u03c3\u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                        "million": "\u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                        "quadrillion": "\u03c4\u03b5\u03c4\u03c1\u03ac\u03ba\u03b9\u03c2 \u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                        "thousand": "\u03c7\u03af\u03bb\u03b9\u03b1",
                        "trillion": "\u03c4\u03c1\u03b9\u03c3\u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                        "unit": ""
                    }
                },
                "format": {
                    "delimiter": "",
                    "precision": 1,
                    "significant": true,
                    "strip_insignificant_zeros": true
                },
                "storage_units": {
                    "format": "%n %u",
                    "units": {
                        "byte": {
                            "one": "byte",
                            "other": "bytes"
                        },
                        "gb": "GB",
                        "kb": "KB",
                        "mb": "MB",
                        "tb": "TB"
                    }
                }
            },
            "percentage": {
                "format": {
                    "delimiter": ""
                }
            },
            "precision": {
                "format": {
                    "delimiter": ""
                }
            }
        },
        "support": {
            "array": {
                "last_word_connector": " \u03ba\u03b1\u03b9 ",
                "two_words_connector": " \u03ba\u03b1\u03b9 ",
                "words_connector": ", "
            }
        },
        "time": {
            "am": "\u03c0\u03bc",
            "formats": {
                "default": "%d %B %Y %H:%M",
                "long": "%A %d %B %Y %H:%M:%S %Z",
                "short": "%d %b %H:%M",
                "note_date": "%d %b, %Y",
                "date": {
                    "abbr_day_names": ["\u039a\u03c5\u03c1", "\u0394\u03b5\u03c5", "\u03a4\u03c1\u03b9", "\u03a4\u03b5\u03c4", "\u03a0\u03b5\u03bc", "\u03a0\u03b1\u03c1", "\u03a3\u03b1\u03b2"],
                    "abbr_month_names": [null, "\u0399\u03b1\u03bd.", "\u03a6\u03b5\u03b2.", "\u039c\u03b1\u03c1.", "\u0391\u03c0\u03c1.", "\u039c\u03b1\u03b9.", "\u0399\u03bf\u03c5\u03bd.", "\u0399\u03bf\u03cd\u03bb.", "\u0391\u03c5\u03b3.", "\u03a3\u03b5\u03c0.", "\u039f\u03ba\u03c4.", "\u039d\u03bf\u03b5.", "\u0394\u03b5\u03ba."],
                    "day_names": ["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae", "\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1", "\u03a4\u03c1\u03af\u03c4\u03b7", "\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7", "\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7", "\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae", "\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"],
                    "formats": {
                        "default": "%d/%m/%Y",
                        "long": "%e %B %Y",
                        "short": "%d %b"
                    },
                    "month_names": [null, "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2", "\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2", "\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2", "\u039c\u03ac\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2", "\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2", "\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2", "\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2", "\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2", "\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"],
                    "order": ["day", "month", "year"]
                },
                "datetime": {
                    "distance_in_words": {
                        "about_x_hours": {
                            "one": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 \u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
                            "other": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 %{count} \u03ce\u03c1\u03b5\u03c2"
                        },
                        "about_x_months": {
                            "one": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 \u03ad\u03bd\u03b1 \u03bc\u03ae\u03bd\u03b1",
                            "other": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 %{count} \u03bc\u03ae\u03bd\u03b5\u03c2"
                        },
                        "about_x_years": {
                            "one": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                            "other": "\u03c0\u03b5\u03c1\u03af\u03c0\u03bf\u03c5 %{count} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                        },
                        "almost_x_years": {
                            "one": "\u03c3\u03c7\u03b5\u03b4\u03cc\u03bd \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                            "other": "\u03c3\u03c7\u03b5\u03b4\u03cc\u03bd %{count} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                        },
                        "half_a_minute": "\u03bc\u03b9\u03c3\u03cc \u03bb\u03b5\u03c0\u03c4\u03cc",
                        "less_than_x_minutes": {
                            "one": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                            "other": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count} \u03bb\u03b5\u03c0\u03c4\u03ac"
                        },
                        "less_than_x_seconds": {
                            "one": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
                            "other": "\u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count} \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"
                        },
                        "over_x_years": {
                            "one": "\u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc \u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                            "other": "\u03c0\u03ac\u03bd\u03c9 \u03b1\u03c0\u03cc %{count} \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                        },
                        "x_days": {
                            "one": "1 \u03bc\u03ad\u03c1\u03b1",
                            "other": "%{count} \u03bc\u03ad\u03c1\u03b5\u03c2"
                        },
                        "x_minutes": {
                            "one": "1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                            "other": "%{count} \u03bb\u03b5\u03c0\u03c4\u03ac"
                        },
                        "x_months": {
                            "one": "1 \u03bc\u03ae\u03bd\u03b1",
                            "other": "%{count} \u03bc\u03ae\u03bd\u03b5\u03c2"
                        },
                        "x_seconds": {
                            "one": "1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
                            "other": "%{count} \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"
                        }
                    },
                    "prompts": {
                        "day": "\u0397\u03bc\u03ad\u03c1\u03b1",
                        "hour": "\u038f\u03c1\u03b1",
                        "minute": "\u039b\u03b5\u03c0\u03c4\u03cc",
                        "month": "\u039c\u03ae\u03bd\u03b1\u03c2",
                        "second": "\u0394\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
                        "year": "\u0388\u03c4\u03bf\u03c2"
                    }
                },
                "errors": {
                    "format": "%{attribute} %{message}",
                    "messages": {
                        "accepted": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b4\u03b5\u03ba\u03c4\u03cc",
                        "blank": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
                        "confirmation": "\u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
                        "empty": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03b4\u03b5\u03b9\u03bf",
                        "equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                        "even": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
                        "exclusion": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b5\u03c3\u03bc\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf",
                        "greater_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                        "greater_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                        "inclusion": "\u03b4\u03b5\u03bd \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
                        "invalid": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf",
                        "less_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                        "less_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                        "not_a_number": "\u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                        "not_an_integer": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                        "odd": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c4\u03c4\u03cc\u03c2",
                        "record_invalid": "\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5: %{errors}",
                        "taken": "\u03c4\u03bf \u03ad\u03c7\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9",
                        "too_long": {
                            "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                            "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                        },
                        "too_short": {
                            "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                            "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                        },
                        "wrong_length": {
                            "one": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                            "other": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                        }
                    },
                    "template": {
                        "body": "\u03a5\u03c0\u03ae\u03c1\u03be\u03b1\u03bd \u03c0\u03c1\u03bf\u03b2\u03bb\u03ae\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1:",
                        "header": {
                            "one": "1 \u03bb\u03ac\u03b8\u03bf\u03c2 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af.",
                            "other": "%{count} \u03bb\u03ac\u03b8\u03b7 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b1\u03bd \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03c4\u03b5\u03af."
                        }
                    }
                },
                "helpers": {
                    "select": {
                        "prompt": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5"
                    },
                    "submit": {
                        "create": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03c3\u03c4\u03b5 %{model}",
                        "submit": "\u0391\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c3\u03c4\u03b5 %{model}",
                        "update": "\u0395\u03bd\u03b7\u03bc\u03b5\u03c1\u03ce\u03c3\u03c4\u03b5 %{model}"
                    }
                },
                "number": {
                    "currency": {
                        "format": {
                            "delimiter": ",",
                            "format": "%n %u",
                            "precision": 2,
                            "separator": ".",
                            "significant": false,
                            "strip_insignificant_zeros": false,
                            "unit": "\u20ac"
                        }
                    },
                    "format": {
                        "delimiter": ".",
                        "precision": 3,
                        "separator": ",",
                        "significant": false,
                        "strip_insignificant_zeros": false
                    },
                    "human": {
                        "decimal_units": {
                            "format": "%n %u",
                            "units": {
                                "billion": "\u03b4\u03b9\u03c3\u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                                "million": "\u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                                "quadrillion": "\u03c4\u03b5\u03c4\u03c1\u03ac\u03ba\u03b9\u03c2 \u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                                "thousand": "\u03c7\u03af\u03bb\u03b9\u03b1",
                                "trillion": "\u03c4\u03c1\u03b9\u03c3\u03b5\u03ba\u03b1\u03c4\u03bf\u03bc\u03bc\u03cd\u03c1\u03b9\u03bf",
                                "unit": ""
                            }
                        },
                        "format": {
                            "delimiter": "",
                            "precision": 1,
                            "significant": true,
                            "strip_insignificant_zeros": true
                        },
                        "storage_units": {
                            "format": "%n %u",
                            "units": {
                                "byte": {
                                    "one": "byte",
                                    "other": "bytes"
                                },
                                "gb": "GB",
                                "kb": "KB",
                                "mb": "MB",
                                "tb": "TB"
                            }
                        }
                    },
                    "percentage": {
                        "format": {
                            "delimiter": ""
                        }
                    },
                    "precision": {
                        "format": {
                            "delimiter": ""
                        }
                    }
                },
                "support": {
                    "array": {
                        "last_word_connector": " \u03ba\u03b1\u03b9 ",
                        "two_words_connector": " \u03ba\u03b1\u03b9 ",
                        "words_connector": ", "
                    }
                },
                "time": {
                    "am": "\u03c0\u03bc",
                    "formats": {
                        "default": "%d %B %Y %H:%M",
                        "long": "%A %d %B %Y %H:%M:%S %Z",
                        "short": "%d %b %H:%M"
                    },
                    "pm": "\u03bc\u03bc"
                },
                "activemodel": {
                    "errors": {
                        "format": "%{attribute} %{message}",
                        "messages": {
                            "accepted": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b4\u03b5\u03ba\u03c4\u03cc",
                            "blank": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
                            "confirmation": "\u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
                            "empty": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03b4\u03b5\u03b9\u03bf",
                            "equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                            "even": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
                            "exclusion": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b5\u03c3\u03bc\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf",
                            "greater_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                            "greater_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                            "inclusion": "\u03b4\u03b5\u03bd \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
                            "invalid": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf",
                            "less_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                            "less_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                            "not_a_number": "\u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                            "not_an_integer": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                            "odd": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c4\u03c4\u03cc\u03c2",
                            "record_invalid": "\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5: %{errors}",
                            "taken": "\u03c4\u03bf \u03ad\u03c7\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9",
                            "too_long": {
                                "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                                "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                            },
                            "too_short": {
                                "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                                "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                            },
                            "wrong_length": {
                                "one": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                                "other": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                            }
                        },
                        "template": {
                            "body": "\u03a5\u03c0\u03ae\u03c1\u03be\u03b1\u03bd \u03c0\u03c1\u03bf\u03b2\u03bb\u03ae\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1:",
                            "header": {
                                "one": "1 \u03bb\u03ac\u03b8\u03bf\u03c2 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af.",
                                "other": "%{count} \u03bb\u03ac\u03b8\u03b7 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b1\u03bd \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03c4\u03b5\u03af."
                            }
                        }
                    }
                },
                "activerecord": {
                    "errors": {
                        "format": "%{attribute} %{message}",
                        "messages": {
                            "accepted": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b4\u03b5\u03ba\u03c4\u03cc",
                            "blank": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
                            "confirmation": "\u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
                            "empty": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03b4\u03b5\u03b9\u03bf",
                            "equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                            "even": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
                            "exclusion": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b5\u03c3\u03bc\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf",
                            "greater_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                            "greater_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                            "inclusion": "\u03b4\u03b5\u03bd \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
                            "invalid": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf",
                            "less_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                            "less_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                            "not_a_number": "\u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                            "not_an_integer": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                            "odd": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c4\u03c4\u03cc\u03c2",
                            "record_invalid": "\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5: %{errors}",
                            "taken": "\u03c4\u03bf \u03ad\u03c7\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9",
                            "too_long": {
                                "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                                "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                            },
                            "too_short": {
                                "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                                "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                            },
                            "wrong_length": {
                                "one": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                                "other": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                            }
                        },
                        "template": {
                            "body": "\u03a5\u03c0\u03ae\u03c1\u03be\u03b1\u03bd \u03c0\u03c1\u03bf\u03b2\u03bb\u03ae\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1:",
                            "header": {
                                "one": "1 \u03bb\u03ac\u03b8\u03bf\u03c2 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af.",
                                "other": "%{count} \u03bb\u03ac\u03b8\u03b7 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b1\u03bd \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03c4\u03b5\u03af."
                            }
                        }
                    }
                }
            },
            "pm": "\u03bc\u03bc"
        },
        "activemodel": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b4\u03b5\u03ba\u03c4\u03cc",
                    "blank": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
                    "confirmation": "\u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
                    "empty": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03b4\u03b5\u03b9\u03bf",
                    "equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                    "even": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
                    "exclusion": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b5\u03c3\u03bc\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf",
                    "greater_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                    "greater_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                    "inclusion": "\u03b4\u03b5\u03bd \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
                    "invalid": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf",
                    "less_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                    "less_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                    "not_a_number": "\u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                    "not_an_integer": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                    "odd": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c4\u03c4\u03cc\u03c2",
                    "record_invalid": "\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5: %{errors}",
                    "taken": "\u03c4\u03bf \u03ad\u03c7\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9",
                    "too_long": {
                        "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                        "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                    },
                    "too_short": {
                        "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                        "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                    },
                    "wrong_length": {
                        "one": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                        "other": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                    }
                },
                "template": {
                    "body": "\u03a5\u03c0\u03ae\u03c1\u03be\u03b1\u03bd \u03c0\u03c1\u03bf\u03b2\u03bb\u03ae\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1:",
                    "header": {
                        "one": "1 \u03bb\u03ac\u03b8\u03bf\u03c2 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af.",
                        "other": "%{count} \u03bb\u03ac\u03b8\u03b7 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b1\u03bd \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03c4\u03b5\u03af."
                    }
                }
            }
        },
        "activerecord": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03bf\u03b4\u03b5\u03ba\u03c4\u03cc",
                    "blank": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
                    "confirmation": "\u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9 \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
                    "empty": "\u03b4\u03b5\u03bd \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03b4\u03b5\u03b9\u03bf",
                    "equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                    "even": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03c1\u03c4\u03b9\u03bf\u03c2",
                    "exclusion": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03b5\u03c3\u03bc\u03b5\u03c5\u03bc\u03ad\u03bd\u03bf",
                    "greater_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                    "greater_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                    "inclusion": "\u03b4\u03b5\u03bd \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03b5\u03c4\u03b1\u03b9 \u03c3\u03c4\u03b7 \u03bb\u03af\u03c3\u03c4\u03b1",
                    "invalid": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf",
                    "less_than": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc %{count}",
                    "less_than_or_equal_to": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03b9\u03b3\u03cc\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5 %{count}",
                    "not_a_number": "\u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                    "not_an_integer": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03ad\u03c1\u03b1\u03b9\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",
                    "odd": "\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c4\u03c4\u03cc\u03c2",
                    "record_invalid": "\u0395\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5: %{errors}",
                    "taken": "\u03c4\u03bf \u03ad\u03c7\u03bf\u03c5\u03bd \u03ae\u03b4\u03b7 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03b9",
                    "too_long": {
                        "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                        "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf (\u03c4\u03bf \u03bc\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                    },
                    "too_short": {
                        "one": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                        "other": "\u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b9\u03ba\u03c1\u03cc (\u03c4\u03bf \u03b5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                    },
                    "wrong_length": {
                        "one": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 1 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b1\u03c2)",
                        "other": "\u03ad\u03c7\u03b5\u03b9 \u03bb\u03b1\u03bd\u03b8\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 (\u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 %{count} \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2)"
                    }
                },
                "template": {
                    "body": "\u03a5\u03c0\u03ae\u03c1\u03be\u03b1\u03bd \u03c0\u03c1\u03bf\u03b2\u03bb\u03ae\u03bc\u03b1\u03c4\u03b1 \u03bc\u03b5 \u03c4\u03b1 \u03b1\u03ba\u03cc\u03bb\u03bf\u03c5\u03b8\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1:",
                    "header": {
                        "one": "1 \u03bb\u03ac\u03b8\u03bf\u03c2 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03b8\u03b5\u03af.",
                        "other": "%{count} \u03bb\u03ac\u03b8\u03b7 \u03b5\u03bc\u03c0\u03cc\u03b4\u03b9\u03c3\u03b1\u03bd \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf %{model} \u03bd\u03b1 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03c5\u03c4\u03b5\u03af."
                    }
                }
            },
            "models": {
                "user": "\u03bc\u03ad\u03bb\u03bf\u03c2",
                "project": "\u03c0\u03c1\u03cc\u03c4\u03b6\u03b5\u03ba\u03c4",
                "story": "\u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b5\u03c2"
            },
            "attributes": {
                "user": {
                    "locale": "\u0393\u03bb\u03ce\u03c3\u03c3\u03b1",
                    "name": "\u038c\u03bd\u03bf\u03bc\u03b1",
                    "initials": "\u0391\u03c1\u03c7\u03b9\u03ba\u03ac",
                    "password": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2",
                    "password_confirmation": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03be\u03b1\u03bd\u03ac",
                    "current_password": "\u03c0\u03b1\u03c1\u03ce\u03bd \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2"
                },
                "note": {
                    "note": "\u03a3\u03b7\u03bc\u03b5\u03af\u03c9\u03c3\u03b7"
                },
                "project": {
                    "name": "\u038c\u03bd\u03bf\u03bc\u03b1",
                    "point_scale": "\u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03b9\u03ba\u03ae \u03ba\u03bb\u03af\u03bc\u03b1\u03ba\u03b1",
                    "start_date": "\u0388\u03bd\u03b1\u03c1\u03be\u03b7",
                    "iteration_start_day": "\u0395\u03ba\u03ba\u03af\u03bd\u03b7\u03c3\u03b7 \u03ba\u03cd\u03ba\u03bb\u03c9\u03bd",
                    "iteration_length": "\u039c\u03ae\u03ba\u03c9\u03c2 \u03ba\u03cd\u03ba\u03bb\u03c9\u03bd",
                    "default_velocity": "\u03a0\u03c1\u03bf\u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b7 \u03a4\u03b1\u03c7\u03cd\u03c4\u03b7\u03c4\u03b1",
                    "started_at": "\u039e\u03b5\u03ba\u03af\u03bd\u03b7\u03c3\u03b5 \u03c3\u03c4\u03b9\u03c2",
                    "created_at": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b9\u03c2",
                    "updated_at": "\u0391\u03bd\u03b1\u03bd\u03b5\u03ce\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b9\u03c2"
                },
                "story": {
                    "title": "\u03a4\u03af\u03c4\u03bb\u03bf\u03c2",
                    "description": "\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
                    "estimate": "\u0395\u03ba\u03c4\u03af\u03bc\u03b7\u03c3\u03b7",
                    "story_type": "\u03a4\u03cd\u03c0\u03bf\u03c2 \u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b1\u03c2",
                    "state": "\u039a\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7",
                    "accepted_at": "\u0391\u03c0\u03bf\u03b4\u03bf\u03c7\u03ae \u03c3\u03c4\u03b9\u03c2",
                    "position": "\u0398\u03ad\u03c3\u03b7",
                    "labels": "\u0395\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2",
                    "requested_by": "\u0396\u03b7\u03c4\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc",
                    "owned_by": "\u0391\u03bd\u03ae\u03ba\u03b5\u03b9 \u03c3\u03b5",
                    "started_at": "\u039e\u03b5\u03ba\u03af\u03bd\u03b7\u03c3\u03b5 \u03c3\u03c4\u03b9\u03c2",
                    "created_at": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b9\u03c2",
                    "updated_at": "\u0391\u03bd\u03b1\u03bd\u03b5\u03ce\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b9\u03c2"
                }
            }
        },
        "i18n": {
            "plural": {
                "keys": ["one", "other"],
                "rule": {}
            }
        },
        "devise": {
            "failure": {
                "already_authenticated": "\u0395\u03af\u03c3\u03c4\u03b5 \u03ae\u03b4\u03b7 \u03c3\u03c5\u03bd\u03b4\u03b5\u03b4\u03b5\u03bc\u03ad\u03bd\u03bf\u03c2.",
                "unauthenticated": "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03b5\u03c4\u03b5.",
                "unconfirmed": "\u03a0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03b9\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc \u03c3\u03b1\u03c2 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03b5\u03c4\u03b5.",
                "locked": "\u039f \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c3\u03b1\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03bb\u03b5\u03b9\u03b4\u03c9\u03bc\u03ad\u03bd\u03bf\u03c2.",
                "invalid": "\u0386\u03ba\u03c5\u03c1\u03b7 \u03b7\u03bb. \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03ae \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2.",
                "invalid_token": "\u0386\u03ba\u03c5\u03c1\u03bf \u03c3\u03cd\u03bc\u03b2\u03bf\u03bb\u03bf \u03b1\u03c5\u03b8\u03b5\u03bd\u03c4\u03b9\u03ba\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2.",
                "timeout": "\u0397 \u03c3\u03c5\u03bd\u03b5\u03b4\u03c1\u03b5\u03af\u03b1 \u03c3\u03b1\u03c2 \u03ad\u03c7\u03b5\u03b9 \u03bb\u03ae\u03be\u03b7, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03b5\u03c0\u03b1\u03bd\u03b1\u03c3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03b5\u03c4\u03b5.",
                "inactive": "\u039f \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af."
            },
            "sessions": {
                "signed_in": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7.",
                "signed_out": "\u0395\u03c0\u03b9\u03c4\u03c5\u03c7\u03ae\u03c2 \u03b1\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7."
            },
            "passwords": {
                "send_instructions": "You will receive an email with instructions about how to reset your password in a few minutes.",
                "updated": "Your password was changed successfully. You are now signed in."
            },
            "confirmations": {
                "send_instructions": "You will receive an email with instructions about how to confirm your account in a few minutes.",
                "confirmed": "Your account was successfully confirmed. You are now signed in."
            },
            "registrations": {
                "signed_up": "\u039a\u03b1\u03bb\u03c9\u03c3\u03ae\u03c1\u03b8\u03b1\u03c4\u03b5! \u0388\u03c7\u03b5\u03c4\u03b5 \u03c3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1.",
                "inactive_signed_up": "\u0388\u03c7\u03b5\u03c4\u03b5 \u03c3\u03c5\u03bd\u03b4\u03b5\u03b8\u03b5\u03af \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1. \u0394\u03c5\u03c3\u03c4\u03c5\u03c7\u03ce\u03c2 \u03cc\u03bc\u03c9\u03c2, \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03c3\u03b5\u03c4\u03b5 \u03b3\u03b9\u03b1\u03c4\u03af %{reason}.",
                "updated": "\u039f\u03b9 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03c3\u03c4\u03bf \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc \u03c3\u03b1\u03c2 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b1\u03bd \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1.",
                "destroyed": "\u0393\u03b5\u03b9\u03ac \u03c7\u03b1\u03c1\u03ac! \u039f \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c3\u03b1\u03c2 \u03b1\u03ba\u03c5\u03c1\u03ce\u03b8\u03b7\u03ba\u03b5 \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1."
            },
            "unlocks": {
                "send_instructions": "You will receive an email with instructions about how to unlock your account in a few minutes.",
                "unlocked": "Your account was successfully unlocked. You are now signed in."
            },
            "omniauth_callbacks": {
                "success": "Successfully authorized from %{kind} account.",
                "failure": "Could not authorize you from %{kind} because \"%{reason}\"."
            },
            "mailer": {
                "confirmation_instructions": {
                    "subject": "\u039f\u03b4\u03b7\u03b3\u03af\u03b5\u03c2 \u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7\u03c2"
                },
                "reset_password_instructions": {
                    "subject": "\u039f\u03b4\u03b7\u03b3\u03af\u03b5\u03c2 \u03b1\u03bd\u03ac\u03ba\u03c4\u03b7\u03c3\u03b7\u03c2 \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd"
                },
                "unlock_instructions": {
                    "subject": "\u039f\u03b4\u03b7\u03b3\u03af\u03b5\u03c2 \u03be\u03b5\u03ba\u03bb\u03b5\u03b9\u03b4\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd"
                }
            }
        },
        "fulcrum": "Fulcrum",
        "log out": "\u03b1\u03c0\u03bf\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
        "log in": "\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7",
        "sign up": "\u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae",
        "edit": "\u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
        "delete": "\u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
        "back": "\u03c0\u03af\u03c3\u03c9",
        "import": "\u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae",
        "export": "\u03b5\u03be\u03b1\u03b3\u03c9\u03b3\u03ae",
        "revert": "\u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
        "apply": "\u03b5\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae",
        "velocity": "\u03c4\u03b1\u03c7\u03cd\u03c4\u03b7\u03c4\u03b1",
        "notes": "\u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03b9\u03c2",
        "close": "\u03ba\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf",
        "points": "\u03c0\u03cc\u03bd\u03c4\u03bf\u03b9",
        "saving": "\u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 ...",
        "expand": "\u03b1\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1",
        "accepted": "\u03b3\u03af\u03bd\u03bf\u03c5\u03bd \u03b1\u03c0\u03bf\u03b4\u03b5\u03ba\u03c4\u03ad\u03c2",
        "rejected": "\u03b1\u03c0\u03bf\u03c1\u03c1\u03b9\u03c6\u03b8\u03bf\u03cd\u03bd",
        "delivered": "\u03c0\u03b1\u03c1\u03b1\u03b4\u03bf\u03b8\u03bf\u03cd\u03bd",
        "author unknown": "\u03b1\u03b3\u03bd\u03c9\u03c3\u03c4\u03bf\u03c2",
        "add story": "\u03bd\u03ad\u03b1 \u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b1",
        "save error": "\u03a0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03b1\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",
        "override velocity": "\u03b5\u03c0\u03b9\u03ba\u03ac\u03bb\u03c5\u03c8\u03b7 \u03c4\u03b1\u03c7\u03cd\u03c4\u03b7\u03c4\u03b1\u03c2",
        "story title": "\u03c4\u03af\u03c4\u03bb\u03bf\u03c2",
        "requested on date": "\u0396\u03b7\u03c4\u03ae\u03b8\u03b7\u03ba\u03b5 \u03c3\u03c4\u03b9\u03c2 {{date}}",
        "requested by user on date": "\u0396\u03b7\u03c4\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03bf {{user}} \u03c3\u03c4\u03b9\u03c2 {{date}}",
        "projects": {
            "new project": "\u039d\u03ad\u03bf \u03c0\u03c1\u03cc\u03c4\u03b6\u03b5\u03ba\u03c4",
            "edit project": "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03c0\u03c1\u03bf\u03c4\u03b6\u03b5\u03ba\u03c4",
            "project properties": "\u03a1\u03c5\u03b8\u03bc\u03af\u03c3\u03b5\u03b9\u03c2 \u03c0\u03c1\u03cc\u03c4\u03b6\u03b5\u03ba\u03c4",
            "project was successfully created": "\u03a4\u03bf \u03c0\u03c1\u03cc\u03c4\u03b6\u03b5\u03ba\u03c4 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1.",
            "project was successfully updated": "\u03a4\u03bf \u03c0\u03c1\u03cc\u03c4\u03b6\u03b5\u03ba\u03c4 \u03b1\u03bd\u03b1\u03bd\u03b5\u03ce\u03b8\u03b7\u03ba\u03b5 \u03bc\u03b5 \u03b5\u03c0\u03b9\u03c4\u03c5\u03c7\u03af\u03b1.",
            "index": {
                "listing projects": "\u039a\u03b1\u03c4\u03ac\u03bb\u03bf\u03b3\u03bf\u03c2 \u03c0\u03c1\u03cc\u03c4\u03b6\u03b5\u03ba\u03c4",
                "are you sure you want to delete this project": "\u0395\u03af\u03c3\u03b1\u03b9 \u03c3\u03af\u03b3\u03bf\u03c5\u03c1\u03bf\u03c2 \u03cc\u03c4\u03b9 \u03b8\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03b5\u03b9\u03c2 \u03c4\u03bf \u03c0\u03c1\u03cc\u03c4\u03b6\u03b5\u03ba\u03c4; \u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03b5\u03b9 undo!",
                "the iteration starts on x with length of x weeks": {
                    "one": "\u039f\u03b9 \u03ba\u03cd\u03ba\u03bb\u03bf\u03b9 \u03be\u03b5\u03ba\u03b9\u03bd\u03bf\u03cd\u03bd %{day} \u03ba\u03b1\u03b9 \u03b4\u03b9\u03b1\u03c1\u03ba\u03bf\u03cd\u03bd 1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1",
                    "other": "\u039f\u03b9 \u03ba\u03cd\u03ba\u03bb\u03bf\u03b9 \u03be\u03b5\u03ba\u03b9\u03bd\u03bf\u03cd\u03bd %{day} \u03ba\u03b1\u03b9 \u03b4\u03b9\u03b1\u03c1\u03ba\u03bf\u03cd\u03bd %{count} \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b5\u03c2"
                }
            },
            "show": {
                "done": "\u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03c9\u03bc\u03ad\u03bd\u03b5\u03c2",
                "in_progress": "\u03c3\u03b5 \u03b5\u03be\u03ad\u03bb\u03b9\u03be\u03b7",
                "backlog": "\u03c3\u03b5 \u03b1\u03bd\u03b1\u03bc\u03bf\u03bd\u03ae",
                "icebox": "\u03c8\u03c5\u03b3\u03b5\u03af\u03bf"
            }
        },
        "registrations": {
            "edit": {
                "leave_blank_if_you_dont_want_to_change_it": "\u0386\u03c6\u03b7\u03c3\u03b5 \u03ba\u03b5\u03bd\u03cc \u03b1\u03bd \u03b4\u03b5\u03bd \u03b8\u03ad\u03c2 \u03bd\u03b1 \u03c4\u03bf \u03b1\u03bb\u03bb\u03ac\u03be\u03b5\u03b9\u03c2",
                "notify_me_when_my_stories_are": "\u0395\u03b9\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03ad \u03bc\u03b5 \u03cc\u03c4\u03b1\u03bd \u03bf\u03b9 \u03b9\u03c3\u03c4\u03bf\u03c1\u03af\u03b5\u03c2 \u03bc\u03bf\u03c5",
                "we_need_your_current_password_to_confirm_your_changes": "\u039f \u03c0\u03b1\u03c1\u03ce\u03bd \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03bc\u03bf\u03c5"
            }
        }
    },
    "es": {
        "date": {
            "abbr_day_names": ["dom", "lun", "mar", "mi\u00e9", "jue", "vie", "s\u00e1b"],
            "abbr_month_names": [null, "ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            "day_names": ["domingo", "lunes", "martes", "mi\u00e9rcoles", "jueves", "viernes", "s\u00e1bado"],
            "formats": {
                "default": "%d/%m/%Y",
                "long": "%A, %d de %B de %Y",
                "short": "%d de %b"
            },
            "month_names": [null, "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            "order": ["day", "month", "year"]
        },
        "datetime": {
            "distance_in_words": {
                "about_x_hours": {
                    "one": "cerca de 1 hora",
                    "other": "cerca de %{count} horas"
                },
                "about_x_months": {
                    "one": "cerca de 1 mes",
                    "other": "cerca de %{count} meses"
                },
                "about_x_years": {
                    "one": "cerca de 1 a\u00f1o",
                    "other": "cerca de %{count} a\u00f1os"
                },
                "almost_x_years": {
                    "one": "casi 1 a\u00f1o",
                    "other": "casi %{count} a\u00f1os"
                },
                "half_a_minute": "medio minuto",
                "less_than_x_minutes": {
                    "one": "menos de 1 minuto",
                    "other": "menos de %{count} minutos"
                },
                "less_than_x_seconds": {
                    "one": "menos de 1 segundo",
                    "other": "menos de %{count} segundos"
                },
                "over_x_years": {
                    "one": "m\u00e1s de 1 a\u00f1o",
                    "other": "m\u00e1s de %{count} a\u00f1os"
                },
                "x_days": {
                    "one": "1 d\u00eda",
                    "other": "%{count} d\u00edas"
                },
                "x_minutes": {
                    "one": "1 minuto",
                    "other": "%{count} minutos"
                },
                "x_months": {
                    "one": "1 mes",
                    "other": "%{count} meses"
                },
                "x_seconds": {
                    "one": "1 segundo",
                    "other": "%{count} segundos"
                }
            },
            "prompts": {
                "day": "D\u00eda",
                "hour": "Hora",
                "minute": "Minuto",
                "month": "Mes",
                "second": "Segundos",
                "year": "A\u00f1o"
            }
        },
        "errors": {
            "format": "%{attribute} %{message}",
            "messages": {
                "accepted": "debe ser aceptado",
                "blank": "no puede estar en blanco",
                "confirmation": "no coincide con la confirmaci\u00f3n",
                "empty": "no puede estar vac\u00edo",
                "equal_to": "debe ser igual a %{count}",
                "even": "debe ser un n\u00famero par",
                "exclusion": "est\u00e1 reservado",
                "greater_than": "debe ser mayor que %{count}",
                "greater_than_or_equal_to": "debe ser mayor o igual que %{count}",
                "inclusion": "no est\u00e1 inclu\u00eddo en la lista",
                "invalid": "es inv\u00e1lido",
                "less_than": "debe ser menor que %{count}",
                "less_than_or_equal_to": "debe ser menor o igual que %{count}",
                "not_a_number": "no es un n\u00famero",
                "not_an_integer": "debe ser un entero",
                "odd": "debe ser un n\u00famero non",
                "record_invalid": "La validaci\u00f3n fall\u00f3: %{errors}",
                "taken": "ya ha sido tomado",
                "too_long": {
                    "one": "es demasiado largo (m\u00e1ximo 1 caracter)",
                    "other": "es demasiado largo (m\u00e1ximo %{count} caracteres)"
                },
                "too_short": {
                    "one": "es demasiado corto (m\u00ednimo 1 caracter)",
                    "other": "es demasiado corto (m\u00ednimo %{count} caracteres)"
                },
                "wrong_length": {
                    "one": "longitud err\u00f3nea (debe ser de 1 caracter)",
                    "other": "longitud err\u00f3nea (debe ser de %{count} caracteres)"
                },
                "already_confirmed": "ya fue confirmado, por favor intenta iniciar sesi\u00f3n",
                "expired": "ha expirado, por favor solicita una nueva",
                "not_found": "no se encontr\u00f3",
                "not_locked": "no estaba bloqueado",
                "not_saved": {
                    "one": "Un error ocurri\u00f3 al tratar de guardar %{resource}:",
                    "other": "%{count} errores ocurrieron al tratar de guardar %{resource}:"
                }
            },
            "template": {
                "body": "Revise que los siguientes campos sean v\u00e1lidos:",
                "header": {
                    "one": "%{model} no pudo guardarse debido a 1 error",
                    "other": "%{model} no pudo guardarse debido a %{count} errores"
                }
            }
        },
        "helpers": {
            "select": {
                "prompt": "Por favor selecciona"
            },
            "submit": {
                "create": "Crear %{model}",
                "submit": "Guardar %{model}",
                "update": "Actualizar %{model}"
            }
        },
        "number": {
            "currency": {
                "format": {
                    "delimiter": ",",
                    "format": "%u%n",
                    "precision": 2,
                    "separator": ".",
                    "significant": false,
                    "strip_insignificant_zeros": false,
                    "unit": "$"
                }
            },
            "format": {
                "delimiter": ",",
                "precision": 2,
                "separator": ".",
                "significant": false,
                "strip_insignificant_zeros": false
            },
            "human": {
                "decimal_units": {
                    "format": "%n %u",
                    "units": {
                        "billion": "mil millones",
                        "million": "mill\u00f3n",
                        "quadrillion": "mil billones",
                        "thousand": "mil",
                        "trillion": "bill\u00f3n",
                        "unit": ""
                    }
                },
                "format": {
                    "delimiter": ",",
                    "precision": 3,
                    "significant": true,
                    "strip_insignificant_zeros": true
                },
                "storage_units": {
                    "format": "%n %u",
                    "units": {
                        "byte": {
                            "one": "Byte",
                            "other": "Bytes"
                        },
                        "gb": "GB",
                        "kb": "KB",
                        "mb": "MB",
                        "tb": "TB"
                    }
                }
            },
            "percentage": {
                "format": {
                    "delimiter": ","
                }
            },
            "precision": {
                "format": {
                    "delimiter": ","
                }
            }
        },
        "support": {
            "array": {
                "last_word_connector": " y ",
                "two_words_connector": " y ",
                "words_connector": ", "
            }
        },
        "time": {
            "am": "am",
            "formats": {
                "default": "%a, %d de %b de %Y a las %H:%M:%S %Z",
                "long": "%A, %d de %B de %Y a las %I:%M %p",
                "short": "%d de %b a las %H:%M hrs",
                "note_date": "%b %d, %Y"
            },
            "pm": "pm"
        },
        "activemodel": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "debe ser aceptado",
                    "blank": "no puede estar en blanco",
                    "confirmation": "no coincide con la confirmaci\u00f3n",
                    "empty": "no puede estar vac\u00edo",
                    "equal_to": "debe ser igual a %{count}",
                    "even": "debe ser un n\u00famero par",
                    "exclusion": "est\u00e1 reservado",
                    "greater_than": "debe ser mayor que %{count}",
                    "greater_than_or_equal_to": "debe ser mayor o igual que %{count}",
                    "inclusion": "no est\u00e1 inclu\u00eddo en la lista",
                    "invalid": "es inv\u00e1lido",
                    "less_than": "debe ser menor que %{count}",
                    "less_than_or_equal_to": "debe ser menor o igual que %{count}",
                    "not_a_number": "no es un n\u00famero",
                    "not_an_integer": "debe ser un entero",
                    "odd": "debe ser un n\u00famero non",
                    "record_invalid": "La validaci\u00f3n fall\u00f3: %{errors}",
                    "taken": "ya ha sido tomado",
                    "too_long": {
                        "one": "es demasiado largo (m\u00e1ximo 1 caracter)",
                        "other": "es demasiado largo (m\u00e1ximo %{count} caracteres)"
                    },
                    "too_short": {
                        "one": "es demasiado corto (m\u00ednimo 1 caracter)",
                        "other": "es demasiado corto (m\u00ednimo %{count} caracteres)"
                    },
                    "wrong_length": {
                        "one": "longitud err\u00f3nea (debe ser de 1 caracter)",
                        "other": "longitud err\u00f3nea (debe ser de %{count} caracteres)"
                    }
                },
                "template": {
                    "body": "Revise que los siguientes campos sean v\u00e1lidos:",
                    "header": {
                        "one": "%{model} no pudo guardarse debido a 1 error",
                        "other": "%{model} no pudo guardarse debido a %{count} errores"
                    }
                }
            }
        },
        "activerecord": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "debe ser aceptado",
                    "blank": "no puede estar en blanco",
                    "confirmation": "no coincide con la confirmaci\u00f3n",
                    "empty": "no puede estar vac\u00edo",
                    "equal_to": "debe ser igual a %{count}",
                    "even": "debe ser par",
                    "exclusion": "est\u00e1 reservado",
                    "greater_than": "debe ser mayor que %{count}",
                    "greater_than_or_equal_to": "debe ser mayor que o igual a %{count}",
                    "inclusion": "no est\u00e1 incluido en la lista",
                    "invalid": "no es v\u00e1lido",
                    "less_than": "debe ser menor que %{count}",
                    "less_than_or_equal_to": "debe ser menor que o igual a %{count}",
                    "not_a_number": "no es un n\u00famero",
                    "not_an_integer": "debe ser un entero",
                    "odd": "debe ser impar",
                    "record_invalid": "La validaci\u00f3n fall\u00f3: %{errors}",
                    "taken": "ya est\u00e1 en uso",
                    "too_long": "es demasiado largo (%{count} caracteres m\u00e1ximo)",
                    "too_short": "es demasiado corto (%{count} caracteres m\u00ednimo)",
                    "wrong_length": "no tiene la longitud correcta (%{count} caracteres exactos)"
                },
                "template": {
                    "body": "Se encontraron problemas con los siguientes campos:",
                    "header": {
                        "one": "No se pudo guardar este/a %{model} porque se encontr\u00f3 1 error",
                        "other": "No se pudo guardar este/a %{model} porque se encontraron %{count} errores"
                    }
                }
            },
            "models": {
                "user": "Miembro",
                "project": "Proyecto"
            }
        },
        "i18n": {
            "plural": {
                "keys": ["one", "other"],
                "rule": {}
            }
        },
        "devise": {
            "confirmations": {
                "confirmed": "Tu cuenta fue confirmada. Ya iniciaste sesi\u00f3n.",
                "send_instructions": "Vas a recibir un correo con instrucciones sobre c\u00f3mo confirmar tu cuenta en unos pocos minutos.",
                "send_paranoid_instructions": "Si tu correo existe en nuestra base de datos, vas a recibir un correo con instrucciones sobre c\u00f3mo confirmar tu cuenta en unos pocos minutos."
            },
            "failure": {
                "already_authenticated": "Ya has iniciado una sesi\u00f3n.",
                "inactive": "Tu cuenta a\u00fan no ha sido activada.",
                "invalid": "Contrase\u00f1a o Correo inv\u00e1lidos.",
                "invalid_token": "C\u00f3digo de autenticaci\u00f3n inv\u00e1lido.",
                "locked": "Tu cuenta est\u00e1 bloqueada.",
                "timeout": "Tu sesi\u00f3n expir\u00f3, por favor inicia sesi\u00f3n nuevamente para continuar.",
                "unauthenticated": "Tienes que iniciar sesi\u00f3n o registrarte para poder continuar.",
                "unconfirmed": "Tienes que confirmar tu cuenta para poder continuar."
            },
            "mailer": {
                "confirmation_instructions": {
                    "subject": "Instrucciones de confirmaci\u00f3n"
                },
                "reset_password_instructions": {
                    "subject": "Instrucciones de recuperaci\u00f3n de contrase\u00f1a"
                },
                "unlock_instructions": {
                    "subject": "Instrucciones para desbloquear"
                }
            },
            "omniauth_callbacks": {
                "failure": "No has sido autorizado en la cuenta %{kind} porque \"%{reason}\".",
                "success": "Has sido autorizado satisfactoriamente de la cuenta %{kind}."
            },
            "passwords": {
                "send_instructions": "Vas a recibir un correo con instrucciones sobre c\u00f3mo resetear tu contrase\u00f1a en unos pocos minutos.",
                "send_paranoid_instructions": "Si tu correo existe en nuestra base de datos, vas a recibir un correo con instrucciones sobre c\u00f3mo resetear tu contrase\u00f1a en tu bandeja de entrada.",
                "updated": "Tu contrase\u00f1a fue cambiada. Ya iniciaste sesi\u00f3n.",
                "updated_not_active": "Tu contrase\u00f1a fue cambiada."
            },
            "registrations": {
                "destroyed": "Fue grato tenerte con nosotros. Tu cuenta fue cancelada.",
                "signed_up": "Bienvenido. Tu cuenta fue creada.",
                "signed_up_but_inactive": "Tu cuenta ha sido creada correctamente. Sin embargo, no hemos podido iniciar la sesi\u00f3n para que tu cuenta a\u00fan no est\u00e1 activada.",
                "signed_up_but_locked": "Tu cuenta ha sido creada correctamente. Sin embargo, no hemos podido iniciar la sesi\u00f3n para que tu cuenta est\u00e1 bloqueada.",
                "signed_up_but_unconfirmed": "Se ha enviado un mensaje con un enlace de confirmaci\u00f3n a tu correo electr\u00f3nico. Abre el enlace para activar tu cuenta.",
                "update_needs_confirmation": "Has actualizado tu cuenta correctamente, pero es necesario confirmar tu nuevo correo electr\u00f3nico. Por favor, comprueba tu correo y sigue el enlace de confirmaci\u00f3n para finalizar la comprobaci\u00f3n del nuevo correo eletr\u00f3nico.",
                "updated": "Tu cuenta fue actualizada."
            },
            "sessions": {
                "signed_in": "Sesi\u00f3n iniciada.",
                "signed_out": "Sesi\u00f3n finalizada."
            },
            "unlocks": {
                "send_instructions": "Vas a recibir instrucciones para desbloquear tu cuenta en unos pocos minutos.",
                "send_paranoid_instructions": "Si tu cuenta existe, vas a recibir instrucciones para desbloquear tu cuenta en unos pocos minutos.",
                "unlocked": "Tu cuenta fue desbloqueada. Ya iniciaste sesi\u00f3n."
            }
        },
        "fulcrum": "Fulcrum",
        "log out": "Termina session",
        "log in": "Inicia session",
        "sign up": "Registrate",
        "edit": "Edita",
        "delete": "Borra",
        "back": "Atras",
        "import": "Importa",
        "export": "Exporta",
        "author unknown": "Autor desconocido",
        "projects": {
            "new project": "Nuevo Proyecto",
            "edit project": "Edita Proyecto",
            "project properties": "Propiedades del Proyecto",
            "project was successfully created": "El proyecto fue creado exitosamente.",
            "project was successfully updated": "El proyecto fue actualizado exitosamente.",
            "index": {
                "listing projects": "Listado de Proyectos",
                "are you sure you want to delete this project": "Estas seguro de querer borrar este proyecto? Esta acci\u00f3n no se puede revertir.",
                "the iteration starts on x with length of x weeks": {
                    "one": "Las iteraciones empiezane en %{day} con una duraci\u00f3n de 1 semana",
                    "other": "Las iteraciones empiezane en %{day} con una duraci\u00f3n de %{count} semanas"
                }
            },
            "show": {
                "done": "Terminadas",
                "in_progress": "En progreso",
                "backlog": "Acumuladas",
                "icebox": "Congelador"
            }
        },
        "registrations": {
            "edit": {
                "leave_blank_if_you_dont_want_to_change_it": "Dejar en blanco si no quieres cambiarlo",
                "notify_me_when_my_stories_are": "Notificame cuando mis historias estan",
                "we_need_your_current_password_to_confirm_your_changes": "Necesitamos tu password para confirmar tus cambios"
            }
        }
    },
    "nl": {
        "date": {
            "abbr_day_names": ["zon", "maa", "din", "woe", "don", "vri", "zat"],
            "abbr_month_names": [null, "jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            "day_names": ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            "formats": {
                "default": "%d/%m/%Y",
                "long": "%e %B %Y",
                "short": "%e %b"
            },
            "month_names": [null, "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            "order": ["day", "month", "year"]
        },
        "datetime": {
            "distance_in_words": {
                "about_x_hours": {
                    "one": "ongeveer een uur",
                    "other": "ongeveer %{count} uur"
                },
                "about_x_months": {
                    "one": "ongeveer een maand",
                    "other": "ongeveer %{count} maanden"
                },
                "about_x_years": {
                    "one": "ongeveer een jaar",
                    "other": "ongeveer %{count} jaar"
                },
                "almost_x_years": {
                    "one": "bijna een jaar",
                    "other": "bijna %{count} jaar"
                },
                "half_a_minute": "een halve minuut",
                "less_than_x_minutes": {
                    "one": "minder dan een minuut",
                    "other": "minder dan %{count} minuten"
                },
                "less_than_x_seconds": {
                    "one": "minder dan een seconde",
                    "other": "minder dan %{count} seconden"
                },
                "over_x_years": {
                    "one": "meer dan een jaar",
                    "other": "meer dan %{count} jaar"
                },
                "x_days": {
                    "one": "1 dag",
                    "other": "%{count} dagen"
                },
                "x_minutes": {
                    "one": "1 minuut",
                    "other": "%{count} minuten"
                },
                "x_months": {
                    "one": "1 maand",
                    "other": "%{count} maanden"
                },
                "x_seconds": {
                    "one": "1 seconde",
                    "other": "%{count} seconden"
                }
            },
            "prompts": {
                "day": "dag",
                "hour": "uur",
                "minute": "minuut",
                "month": "maand",
                "second": "seconde",
                "year": "jaar"
            }
        },
        "errors": {
            "format": "%{attribute} %{message}",
            "messages": {
                "accepted": "moet worden geaccepteerd",
                "blank": "moet opgegeven zijn",
                "confirmation": "komt niet met de bevestiging overeen",
                "empty": "moet opgegeven zijn",
                "equal_to": "moet gelijk zijn aan %{count}",
                "even": "moet even zijn",
                "exclusion": "is niet beschikbaar",
                "greater_than": "moet groter zijn dan %{count}",
                "greater_than_or_equal_to": "moet groter dan of gelijk zijn aan %{count}",
                "inclusion": "is niet in de lijst opgenomen",
                "invalid": "is ongeldig",
                "less_than": "moet minder zijn dan %{count}",
                "less_than_or_equal_to": "moet minder dan of gelijk zijn aan %{count}",
                "not_a_number": "is geen getal",
                "not_an_integer": "moet een geheel getal zijn",
                "odd": "moet oneven zijn",
                "record_invalid": "Validatie mislukt: %{errors}",
                "taken": "is al in gebruik",
                "too_long": "is te lang (maximaal %{count} tekens)",
                "too_short": "is te kort (minimaal %{count} tekens)",
                "wrong_length": "heeft onjuiste lengte (moet %{count} tekens lang zijn)",
                "expired": "is verlopen, vraag een nieuwe aan",
                "not_found": "niet gevonden",
                "already_confirmed": "is reeds bevestigd",
                "not_locked": "is niet gesloten",
                "not_saved": {
                    "one": "Kon de %{resource} niet opslaan:",
                    "other": "Kon de %{resource} niet opslaan:"
                }
            },
            "template": {
                "body": "Controleer de volgende velden:",
                "header": {
                    "one": "%{model} niet opgeslagen: 1 fout gevonden",
                    "other": "%{model} niet opgeslagen: %{count} fouten gevonden"
                }
            }
        },
        "helpers": {
            "select": {
                "prompt": "Selecteer"
            },
            "submit": {
                "create": "%{model} toevoegen",
                "submit": "%{model} opslaan",
                "update": "%{model} bewaren"
            }
        },
        "number": {
            "currency": {
                "format": {
                    "delimiter": ".",
                    "format": "%u%n",
                    "precision": 2,
                    "separator": ",",
                    "significant": false,
                    "strip_insignificant_zeros": false,
                    "unit": "\u20ac"
                }
            },
            "format": {
                "delimiter": ".",
                "precision": 2,
                "separator": ",",
                "significant": false,
                "strip_insignificant_zeros": false
            },
            "human": {
                "decimal_units": {
                    "format": "%n %u",
                    "units": {
                        "billion": "miljard",
                        "million": "miljoen",
                        "quadrillion": "biljard",
                        "thousand": "duizend",
                        "trillion": "biljoen",
                        "unit": ""
                    }
                },
                "format": {
                    "delimiter": "",
                    "precision": 3,
                    "significant": true,
                    "strip_insignificant_zeros": true
                },
                "storage_units": {
                    "format": "%n %u",
                    "units": {
                        "byte": {
                            "one": "Byte",
                            "other": "Bytes"
                        },
                        "gb": "GB",
                        "kb": "KB",
                        "mb": "MB",
                        "tb": "TB"
                    }
                }
            },
            "percentage": {
                "format": {
                    "delimiter": ""
                }
            },
            "precision": {
                "format": {
                    "delimiter": ""
                }
            }
        },
        "support": {
            "array": {
                "last_word_connector": " en ",
                "two_words_connector": " en ",
                "words_connector": ", "
            }
        },
        "time": {
            "am": "'s ochtends",
            "formats": {
                "default": "%a %d %b %Y %H:%M:%S %Z",
                "long": "%d %B %Y %H:%M",
                "short": "%d %b %H:%M",
                "note_date": "%b %d, %Y"
            },
            "pm": "'s middags"
        },
        "activemodel": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "moet worden geaccepteerd",
                    "blank": "moet opgegeven zijn",
                    "confirmation": "komt niet met de bevestiging overeen",
                    "empty": "moet opgegeven zijn",
                    "equal_to": "moet gelijk zijn aan %{count}",
                    "even": "moet even zijn",
                    "exclusion": "is niet beschikbaar",
                    "greater_than": "moet groter zijn dan %{count}",
                    "greater_than_or_equal_to": "moet groter dan of gelijk zijn aan %{count}",
                    "inclusion": "is niet in de lijst opgenomen",
                    "invalid": "is ongeldig",
                    "less_than": "moet minder zijn dan %{count}",
                    "less_than_or_equal_to": "moet minder dan of gelijk zijn aan %{count}",
                    "not_a_number": "is geen getal",
                    "not_an_integer": "moet een geheel getal zijn",
                    "odd": "moet oneven zijn",
                    "record_invalid": "Validatie mislukt: %{errors}",
                    "taken": "is al in gebruik",
                    "too_long": "is te lang (maximaal %{count} tekens)",
                    "too_short": "is te kort (minimaal %{count} tekens)",
                    "wrong_length": "heeft onjuiste lengte (moet %{count} tekens lang zijn)"
                },
                "template": {
                    "body": "Controleer de volgende velden:",
                    "header": {
                        "one": "%{model} niet opgeslagen: 1 fout gevonden",
                        "other": "%{model} niet opgeslagen: %{count} fouten gevonden"
                    }
                }
            }
        },
        "activerecord": {
            "errors": {
                "format": "%{attribute} %{message}",
                "messages": {
                    "accepted": "moet worden geaccepteerd",
                    "blank": "moet opgegeven zijn",
                    "confirmation": "komt niet met de bevestiging overeen",
                    "empty": "moet opgegeven zijn",
                    "equal_to": "moet gelijk zijn aan %{count}",
                    "even": "moet even zijn",
                    "exclusion": "is niet beschikbaar",
                    "greater_than": "moet groter zijn dan %{count}",
                    "greater_than_or_equal_to": "moet groter dan of gelijk zijn aan %{count}",
                    "inclusion": "is niet in de lijst opgenomen",
                    "invalid": "is ongeldig",
                    "less_than": "moet minder zijn dan %{count}",
                    "less_than_or_equal_to": "moet minder dan of gelijk zijn aan %{count}",
                    "not_a_number": "is geen getal",
                    "not_an_integer": "moet een geheel getal zijn",
                    "odd": "moet oneven zijn",
                    "record_invalid": "Validatie mislukt: %{errors}",
                    "taken": "is al in gebruik",
                    "too_long": "is te lang (maximaal %{count} tekens)",
                    "too_short": "is te kort (minimaal %{count} tekens)",
                    "wrong_length": "heeft onjuiste lengte (moet %{count} tekens lang zijn)"
                },
                "template": {
                    "body": "Controleer de volgende velden:",
                    "header": {
                        "one": "%{model} niet opgeslagen: 1 fout gevonden",
                        "other": "%{model} niet opgeslagen: %{count} fouten gevonden"
                    }
                }
            },
            "models": {
                "user": {
                    "one": "Gebruiker",
                    "other": "Gebruikers"
                },
                "project": {
                    "one": "Project",
                    "other": "Projecten"
                },
                "story": {
                    "one": "Verhaal",
                    "other": "Verhalen"
                }
            },
            "attributes": {
                "note": {
                    "note": "Notitie"
                },
                "project": {
                    "name": "Naam",
                    "point_scale": "Punten schaal",
                    "start_date": "Start datum",
                    "iteration_start_day": "Iteratie start dag",
                    "iteration_length": "Iteratie lengte",
                    "default_velocity": "Standaard snelheid"
                },
                "story": {
                    "title": "Titel",
                    "description": "Omschrijving",
                    "estimate": "Inschatting",
                    "story_type": "Verhaal type",
                    "state": "Status",
                    "accepted_at": "Geaccepteerd op",
                    "position": "Positie",
                    "labels": "Labels",
                    "requested_by": "Aangevraagd door",
                    "owned_by": "In bezit door"
                }
            }
        },
        "i18n": {
            "plural": {
                "keys": ["one", "other"],
                "rule": {}
            }
        },
        "devise": {
            "failure": {
                "already_authenticated": "Je bent al ingelogd.",
                "unauthenticated": "Je dient in te loggen of je in te schrijven.",
                "unconfirmed": "Je dient eerst je account te bevestigen.",
                "locked": "Je account is gelocked.",
                "invalid": "Ongeldig e-mail of wachtwoord.",
                "invalid_token": "Invalide authenticiteit token.",
                "timeout": "Je sessie is verlopen, log a.u.b. opnieuw in.",
                "inactive": "Je account is nog niet geactiveerd."
            },
            "sessions": {
                "signed_in": "Je bent succesvol ingelogd.",
                "signed_out": "Je bent succesvol uitgelogd."
            },
            "passwords": {
                "send_instructions": "Je ontvangt via e-mail instructies hoe je je wachtwoord moet resetten.",
                "send_paranoid_instructions": "Als je e-mailadres bestaat in de database, ontvang je via e-mail instructies hoe je je wachtwoord moet resetten.",
                "updated": "Je wachtwoord is gewijzigd. Je bent nu ingelogd.",
                "updated_not_active": "Je wachtwoord is gewijzigd."
            },
            "confirmations": {
                "send_instructions": "Je ontvangt via e-mail instructies hoe je je account kan bevestigen.",
                "send_paranoid_instructions": "Als je e-mailadres bestaat in de database, ontvang je via e-mail instructies hoe je je account kan bevestigen.",
                "confirmed": "Je account is bevestigd."
            },
            "registrations": {
                "signed_up_but_unconfirmed": "Je ontvangt via e-mail instructies hoe je je account kunt activeren.",
                "signed_up_but_inactive": "Je bent inschreven. Je kon alleen niet automatisch ingelogd worden omdat je account nog niet geactoveerd is.",
                "signed_up_but_locked": "Je bent inschreven. Je kon alleen niet automatisch ingelogd worden omdat je account geblokkeerd is.",
                "signed_up": "Je bent inschreven.",
                "update_needs_confirmation": "Je hebt je e-mailadres succesvol gewijzigd, maar we moeten je nieuwe mailadres nog verifi\u00ebren. Controleer je e-mail en klik op de link in de mail om je mailadres te verifi\u00ebren.",
                "updated": "Je account gegevens zijn opgeslagen.",
                "destroyed": "Je account is verwijderd, wellicht tot ziens!"
            },
            "unlocks": {
                "send_instructions": "Je ontvangt via e-mail instructies hoe je je account kan unlocken.",
                "unlocked": "Je account is ge-unlocked. Je kan nu weer inloggen.",
                "send_paranoid_instructions": "Als je e-mailadres bestaat in de database, ontvang je via e-mail instructies hoe je je account kan unlocken."
            },
            "omniauth_callbacks": {
                "success": "Successvol aangemeld met je %{kind} account.",
                "failure": "Kon je niet aanmelden met je %{kind} account, omdat \"%{reason}\"."
            },
            "mailer": {
                "confirmation_instructions": {
                    "subject": "Bevestiging mailadres"
                },
                "reset_password_instructions": {
                    "subject": "Wachtwoord resetten"
                },
                "unlock_instructions": {
                    "subject": "Unlock instructies"
                }
            }
        },
        "fulcrum": "Fulcrum",
        "log out": "Log uit",
        "log in": "Log in",
        "sign up": "Aanmelden",
        "edit": "Wijzig",
        "delete": "Verwijder",
        "back": "Terug",
        "import": "Import",
        "export": "Export",
        "revert": "Ongedaan maken",
        "apply": "Bevestigen",
        "velocity": "Snelheid",
        "notes": "Notities",
        "close": "Sluiten",
        "points": "Punten",
        "saving": "Opslaan ...",
        "expand": "Uitvouwen",
        "author unknown": "Auteur Onbekend",
        "add story": "Voeg verhaal toe",
        "save error": "Oplaan fout",
        "override velocity": "Overschijf snelheid",
        "story title": "Verhaal titel",
        "requested on date": "Aangevraagd op {{date}}",
        "requested by user on date": "Aangevraagd door {{user}} op {{date}}",
        "imported n stories": {
            "one": "1 verhaal geimporteerd",
            "other": "%{count} verhalen geimporteerd"
        },
        "n stories failed to import": {
            "one": "1 verhaal kon niet worden geimporteerd",
            "other": "%{count} verhalen kon niet worden geimporteerd"
        },
        "n weeks": {
            "one": "1 week",
            "other": "%{count} weken"
        },
        "projects": {
            "new project": "Nieuw Project",
            "edit project": "Wijzig Project",
            "project properties": "Project Eigenschappen",
            "project was successfully created": "Project is met succes aangemaakt.",
            "project was successfully updated": "Project is met succes gewijzigd",
            "index": {
                "listing projects": "Projecten overzicht",
                "are you sure you want to delete this project": "Weet u zeker dat u dit project wilt verwijderen? Deze actie kan niet ongedaan gemaakt worden!",
                "the iteration starts on x with length of x weeks": {
                    "one": "Iteraties starten op %{day} met een lengte van 1 week",
                    "other": "Iteraties starten op %{day} met een lengte van %{count} weken"
                }
            },
            "show": {
                "done": "Klaar",
                "in_progress": "In Behandeling",
                "backlog": "Backlog",
                "icebox": "Ijskast"
            }
        },
        "registrations": {
            "edit": {
                "leave_blank_if_you_dont_want_to_change_it": "Laat dit veld leeg als u het niet wilt wijzigen",
                "notify_me_when_my_stories_are": "Laat me weten wanneer mijn verhalen zijn",
                "we_need_your_current_password_to_confirm_your_changes": "We hebben uw huidige wachtwoord in om uw wijzigingen te bevestigen."
            }
        }
    },
    "ja": {
        "date": {
            "abbr_day_names": ["\u65e5", "\u6708", "\u706b", "\u6c34", "\u6728", "\u91d1", "\u571f"],
            "abbr_month_names": [null, "1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
            "day_names": ["\u65e5\u66dc\u65e5", "\u6708\u66dc\u65e5", "\u706b\u66dc\u65e5", "\u6c34\u66dc\u65e5", "\u6728\u66dc\u65e5", "\u91d1\u66dc\u65e5", "\u571f\u66dc\u65e5"],
            "formats": {
                "default": "%Y/%m/%d",
                "long": "%Y\u5e74%m\u6708%d\u65e5(%a)",
                "short": "%m/%d"
            },
            "month_names": [null, "1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
            "order": ["year", "month", "day"]
        },
        "datetime": {
            "distance_in_words": {
                "about_x_hours": {
                    "one": "\u7d041\u6642\u9593",
                    "other": "\u7d04%{count}\u6642\u9593"
                },
                "about_x_months": {
                    "one": "\u7d041\u30f6\u6708",
                    "other": "\u7d04%{count}\u30f6\u6708"
                },
                "about_x_years": {
                    "one": "\u7d041\u5e74",
                    "other": "\u7d04%{count}\u5e74"
                },
                "almost_x_years": {
                    "one": "1\u5e74\u5f31",
                    "other": "%{count}\u5e74\u5f31"
                },
                "half_a_minute": "30\u79d2\u524d\u5f8c",
                "less_than_x_minutes": {
                    "one": "1\u5206\u4ee5\u5185",
                    "other": "%{count}\u5206\u4ee5\u5185"
                },
                "less_than_x_seconds": {
                    "one": "1\u79d2\u4ee5\u5185",
                    "other": "%{count}\u79d2\u4ee5\u5185"
                },
                "over_x_years": {
                    "one": "1\u5e74\u4ee5\u4e0a",
                    "other": "%{count}\u5e74\u4ee5\u4e0a"
                },
                "x_days": {
                    "one": "1\u65e5",
                    "other": "%{count}\u65e5"
                },
                "x_minutes": {
                    "one": "1\u5206",
                    "other": "%{count}\u5206"
                },
                "x_months": {
                    "one": "1\u30f6\u6708",
                    "other": "%{count}\u30f6\u6708"
                },
                "x_seconds": {
                    "one": "1\u79d2",
                    "other": "%{count}\u79d2"
                }
            },
            "prompts": {
                "day": "\u65e5",
                "hour": "\u6642",
                "minute": "\u5206",
                "month": "\u6708",
                "second": "\u79d2",
                "year": "\u5e74"
            }
        },
        "errors": {
            "format": "%{attribute}%{message}",
            "messages": {
                "accepted": "\u3092\u53d7\u8afe\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "blank": "\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "confirmation": "\u3068\u78ba\u8a8d\u306e\u5165\u529b\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002",
                "empty": "\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "equal_to": "\u306f%{count}\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "even": "\u306f\u5076\u6570\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "exclusion": "\u306f\u4e88\u7d04\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
                "greater_than": "\u306f%{count}\u3088\u308a\u5927\u304d\u3044\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "greater_than_or_equal_to": "\u306f%{count}\u4ee5\u4e0a\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "inclusion": "\u306f\u4e00\u89a7\u306b\u3042\u308a\u307e\u305b\u3093\u3002",
                "invalid": "\u306f\u4e0d\u6b63\u306a\u5024\u3067\u3059\u3002",
                "less_than": "\u306f%{count}\u3088\u308a\u5c0f\u3055\u3044\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "less_than_or_equal_to": "\u306f%{count}\u4ee5\u4e0b\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "not_a_number": "\u306f\u6570\u5024\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "not_an_integer": "\u306f\u6574\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "odd": "\u306f\u5947\u6570\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "record_invalid": "\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002 %{errors}",
                "taken": "\u306f\u3059\u3067\u306b\u5b58\u5728\u3057\u307e\u3059\u3002",
                "too_long": "\u306f%{count}\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "too_short": "\u306f%{count}\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "wrong_length": "\u306f%{count}\u6587\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "not_found": "\u306f\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f",
                "already_confirmed": "\u306f\u65e2\u306b\u767b\u9332\u6e08\u307f\u3067\u3059\u306e\u3067\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044",
                "not_locked": "\u306f\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u305b\u3093"
            },
            "template": {
                "body": "\u6b21\u306e\u9805\u76ee\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "header": {
                    "one": "%{model}\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002",
                    "other": "%{model}\u306b%{count}\u500b\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"
                }
            }
        },
        "helpers": {
            "select": {
                "prompt": "\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
            },
            "submit": {
                "create": "\u767b\u9332\u3059\u308b",
                "submit": "\u4fdd\u5b58\u3059\u308b",
                "update": "\u66f4\u65b0\u3059\u308b"
            }
        },
        "number": {
            "currency": {
                "format": {
                    "delimiter": ",",
                    "format": "%n%u",
                    "precision": 0,
                    "separator": ".",
                    "significant": false,
                    "strip_insignificant_zeros": false,
                    "unit": "\u5186"
                }
            },
            "format": {
                "delimiter": ",",
                "precision": 3,
                "separator": ".",
                "significant": false,
                "strip_insignificant_zeros": false
            },
            "human": {
                "decimal_units": {
                    "format": "%n %u",
                    "units": {
                        "billion": "\u5341\u5104",
                        "million": "\u767e\u4e07",
                        "quadrillion": "\u5343\u5146",
                        "thousand": "\u5343",
                        "trillion": "\u5146",
                        "unit": ""
                    }
                },
                "format": {
                    "delimiter": "",
                    "precision": 3,
                    "significant": true,
                    "strip_insignificant_zeros": true
                },
                "storage_units": {
                    "format": "%n%u",
                    "units": {
                        "byte": "\u30d0\u30a4\u30c8",
                        "gb": "\u30ae\u30ac\u30d0\u30a4\u30c8",
                        "kb": "\u30ad\u30ed\u30d0\u30a4\u30c8",
                        "mb": "\u30e1\u30ac\u30d0\u30a4\u30c8",
                        "tb": "\u30c6\u30e9\u30d0\u30a4\u30c8"
                    }
                }
            },
            "percentage": {
                "format": {
                    "delimiter": ""
                }
            },
            "precision": {
                "format": {
                    "delimiter": ""
                }
            }
        },
        "support": {
            "array": {
                "last_word_connector": "\u3068",
                "two_words_connector": "\u3068",
                "words_connector": "\u3068"
            }
        },
        "time": {
            "am": "\u5348\u524d",
            "formats": {
                "default": "%Y/%m/%d %H:%M:%S",
                "long": "%Y\u5e74%m\u6708%d\u65e5(%a) %H\u6642%M\u5206%S\u79d2 %z",
                "short": "%y/%m/%d %H:%M",
                "note_date": "%b %d, %Y"
            },
            "pm": "\u5348\u5f8c"
        },
        "activemodel": {
            "errors": {
                "format": "%{attribute}%{message}",
                "messages": {
                    "accepted": "\u3092\u53d7\u8afe\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "blank": "\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "confirmation": "\u3068\u78ba\u8a8d\u306e\u5165\u529b\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002",
                    "empty": "\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "equal_to": "\u306f%{count}\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "even": "\u306f\u5076\u6570\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "exclusion": "\u306f\u4e88\u7d04\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
                    "greater_than": "\u306f%{count}\u3088\u308a\u5927\u304d\u3044\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "greater_than_or_equal_to": "\u306f%{count}\u4ee5\u4e0a\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "inclusion": "\u306f\u4e00\u89a7\u306b\u3042\u308a\u307e\u305b\u3093\u3002",
                    "invalid": "\u306f\u4e0d\u6b63\u306a\u5024\u3067\u3059\u3002",
                    "less_than": "\u306f%{count}\u3088\u308a\u5c0f\u3055\u3044\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "less_than_or_equal_to": "\u306f%{count}\u4ee5\u4e0b\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "not_a_number": "\u306f\u6570\u5024\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "not_an_integer": "\u306f\u6574\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "odd": "\u306f\u5947\u6570\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "record_invalid": "\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002 %{errors}",
                    "taken": "\u306f\u3059\u3067\u306b\u5b58\u5728\u3057\u307e\u3059\u3002",
                    "too_long": "\u306f%{count}\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "too_short": "\u306f%{count}\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "wrong_length": "\u306f%{count}\u6587\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                },
                "template": {
                    "body": "\u6b21\u306e\u9805\u76ee\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "header": {
                        "one": "%{model}\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002",
                        "other": "%{model}\u306b%{count}\u500b\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"
                    }
                }
            }
        },
        "activerecord": {
            "errors": {
                "format": "%{attribute}%{message}",
                "messages": {
                    "accepted": "\u3092\u53d7\u8afe\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "blank": "\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "confirmation": "\u3068\u78ba\u8a8d\u306e\u5165\u529b\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002",
                    "empty": "\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "equal_to": "\u306f%{count}\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "even": "\u306f\u5076\u6570\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "exclusion": "\u306f\u4e88\u7d04\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
                    "greater_than": "\u306f%{count}\u3088\u308a\u5927\u304d\u3044\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "greater_than_or_equal_to": "\u306f%{count}\u4ee5\u4e0a\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "inclusion": "\u306f\u4e00\u89a7\u306b\u3042\u308a\u307e\u305b\u3093\u3002",
                    "invalid": "\u306f\u4e0d\u6b63\u306a\u5024\u3067\u3059\u3002",
                    "less_than": "\u306f%{count}\u3088\u308a\u5c0f\u3055\u3044\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "less_than_or_equal_to": "\u306f%{count}\u4ee5\u4e0b\u306e\u5024\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "not_a_number": "\u306f\u6570\u5024\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "not_an_integer": "\u306f\u6574\u6570\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "odd": "\u306f\u5947\u6570\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "record_invalid": "\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002 %{errors}",
                    "taken": "\u306f\u3059\u3067\u306b\u5b58\u5728\u3057\u307e\u3059\u3002",
                    "too_long": "\u306f%{count}\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "too_short": "\u306f%{count}\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "wrong_length": "\u306f%{count}\u6587\u5b57\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"
                },
                "template": {
                    "body": "\u6b21\u306e\u9805\u76ee\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                    "header": {
                        "one": "%{model}\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002",
                        "other": "%{model}\u306b%{count}\u500b\u306e\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"
                    }
                }
            },
            "models": {
                "user": {
                    "one": "\u30e1\u30f3\u30d0\u30fc",
                    "other": "\u30e1\u30f3\u30d0\u30fc"
                },
                "project": {
                    "one": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
                    "other": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"
                },
                "story": {
                    "one": "\u30b9\u30c8\u30fc\u30ea\u30fc",
                    "other": "\u30b9\u30c8\u30fc\u30ea\u30fc"
                }
            },
            "attributes": {
                "note": {
                    "note": "\u30ce\u30fc\u30c8"
                },
                "project": {
                    "name": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d",
                    "point_scale": "\u30dd\u30a4\u30f3\u30c8\u30b9\u30b1\u30fc\u30eb",
                    "start_date": "\u958b\u59cb\u65e5",
                    "iteration_start_day": "\u30a4\u30c6\u30ec\u30fc\u30b7\u30e7\u30f3\u958b\u59cb\u65e5",
                    "iteration_length": "\u30a4\u30c6\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u9577\u3055",
                    "default_velocity": "\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d9\u30ed\u30b7\u30c6\u30a3"
                },
                "story": {
                    "title": "\u30bf\u30a4\u30c8\u30eb",
                    "description": "\u8aac\u660e",
                    "estimate": "\u898b\u7a4d\u308a",
                    "story_type": "\u30b9\u30c8\u30fc\u30ea\u30fc\u30bf\u30a4\u30d7",
                    "state": "\u30b9\u30c6\u30fc\u30bf\u30b9",
                    "accepted_at": "\u627f\u8a8d\u65e5",
                    "position": "\u4f4d\u7f6e",
                    "labels": "\u30e9\u30d9\u30eb",
                    "requested_by": "\u4f9d\u983c\u8005",
                    "owned_by": "\u62c5\u5f53\u8005"
                }
            }
        },
        "i18n": {
            "plural": {
                "keys": ["other"],
                "rule": {}
            }
        },
        "devise": {
            "failure": {
                "unauthenticated": "\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "unconfirmed": "\u672c\u767b\u9332\u3092\u884c\u306a\u3063\u3066\u304f\u3060\u3055\u3044\u3002",
                "locked": "\u3042\u306a\u305f\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u30ed\u30c3\u30af\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
                "invalid": "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9055\u3044\u307e\u3059\u3002",
                "invalid_token": "\u8a8d\u8a3c\u30ad\u30fc\u304c\u4e0d\u6b63\u3067\u3059\u3002",
                "timeout": "\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
                "inactive": "\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u30a2\u30af\u30c6\u30a3\u30d9\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"
            },
            "sessions": {
                "signed_in": "\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f\u3002",
                "signed_out": "\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f\u3002"
            },
            "passwords": {
                "send_instructions": "\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u30ea\u30bb\u30c3\u30c8\u65b9\u6cd5\u3092\u6570\u5206\u4ee5\u5185\u306b\u30e1\u30fc\u30eb\u3067\u3054\u9023\u7d61\u3057\u307e\u3059\u3002",
                "updated": "\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002"
            },
            "confirmations": {
                "send_instructions": "\u767b\u9332\u65b9\u6cd5\u3092\u6570\u5206\u4ee5\u5185\u306b\u30e1\u30fc\u30eb\u3067\u3054\u9023\u7d61\u3057\u307e\u3059\u3002",
                "confirmed": "\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u767b\u9332\u3057\u307e\u3057\u305f\u3002",
                "invalid_token": "\u8a8d\u8a3c\u30ad\u30fc\u304c\u4e0d\u6b63\u3067\u3059\u3002"
            },
            "registrations": {
                "signed_up": "\u30a2\u30ab\u30a6\u30f3\u30c8\u767b\u9332\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3057\u305f\u3002",
                "signed_up_but_unconfirmed": "\u672c\u4eba\u78ba\u8a8d\u7528\u306e\u30e1\u30fc\u30eb\u304c\u3042\u306a\u305f\u306eE\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u9001\u3089\u308c\u307e\u3057\u305f\u3002\u30e1\u30fc\u30eb\u5185\u306e\u30ea\u30f3\u30af\u304b\u3089\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6709\u52b9\u5316\u3055\u305b\u3066\u304f\u3060\u3055\u3044\u3002",
                "updated": "\u30a2\u30ab\u30a6\u30f3\u30c8\u60c5\u5831\u3092\u5909\u66f4\u3057\u307e\u3057\u305f\u3002",
                "destroyed": "\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002\u307e\u305f\u306e\u3054\u5229\u7528\u3092\u304a\u5f85\u3061\u3057\u3066\u304a\u308a\u307e\u3059\u3002"
            },
            "unlocks": {
                "send_instructions": "\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ed\u30c3\u30af\u89e3\u9664\u60c5\u5831\u3092\u6570\u5206\u4ee5\u5185\u306b \u30e1\u30fc\u30eb\u3067\u3054\u9023\u7d61\u3057\u307e\u3059\u3002",
                "unlocked": "\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u30ed\u30c3\u30af\u89e3\u9664\u3057\u307e\u3057\u305f\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u3059\u3002"
            },
            "mailer": {
                "confirmation_instructions": {
                    "subject": "\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u767b\u9332\u65b9\u6cd5"
                },
                "reset_password_instructions": {
                    "subject": "\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u518d\u8a2d\u5b9a"
                },
                "unlock_instructions": {
                    "subject": "\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ed\u30c3\u30af\u89e3\u9664"
                }
            }
        },
        "fulcrum": "Fulcrum",
        "log out": "\u30ed\u30b0\u30a2\u30a6\u30c8",
        "log in": "\u30ed\u30b0\u30a4\u30f3",
        "sign up": "\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7",
        "edit": "\u7de8\u96c6",
        "delete": "\u524a\u9664",
        "back": "\u623b\u308b",
        "import": "\u30a4\u30f3\u30dd\u30fc\u30c8",
        "export": "\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",
        "revert": "\u623b\u3059",
        "apply": "\u9069\u7528",
        "velocity": "\u30d9\u30ed\u30b7\u30c6\u30a3",
        "notes": "\u30ce\u30fc\u30c8",
        "close": "\u9589\u3058\u308b",
        "points": "\u30dd\u30a4\u30f3\u30c8",
        "saving": "\u4fdd\u5b58\u4e2d\u2026",
        "expand": "\u5e83\u3052\u308b",
        "author unknown": "\u4f5c\u8005\u4e0d\u660e",
        "add story": "\u30b9\u30c8\u30fc\u30ea\u30fc\u8ffd\u52a0",
        "save error": "\u4fdd\u5b58\u30a8\u30e9\u30fc",
        "override velocity": "\u30d9\u30ed\u30b7\u30c6\u30a3\u3092\u4e0a\u66f8\u304d\u3059\u308b",
        "story title": "\u30b9\u30c8\u30fc\u30ea\u30fc\u30bf\u30a4\u30c8\u30eb",
        "requested on date": "\u4f9d\u983c\u65e5 {{date}}",
        "requested by user on date": "\u4f9d\u983c\u8005: {{user}} \u4f9d\u983c\u65e5: {{date}}",
        "imported n stories": {
            "one": "1\u500b\u306e\u30b9\u30c8\u30fc\u30ea\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f",
            "other": "%{count}\u500b\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u307e\u3057\u305f"
        },
        "n stories failed to import": {
            "one": "1\u500b\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f",
            "other": "%{count}\u500b\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u306b\u5931\u6557\u3057\u307e\u3057\u305f"
        },
        "n weeks": {
            "one": "1\u9031\u9593",
            "other": "%{count}\u9031\u9593"
        },
        "projects": {
            "new project": "\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",
            "edit project": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7de8\u96c6",
            "project properties": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u8a73\u7d30",
            "project was successfully created": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002",
            "project was successfully updated": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u66f4\u65b0\u306b\u6210\u529f\u3057\u307e\u3057\u305f\u3002",
            "index": {
                "listing projects": "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u4e00\u89a7",
                "are you sure you want to delete this project": "\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f\u3053\u306e\u52d5\u4f5c\u306f\u5143\u306b\u623b\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",
                "the iteration starts on x with length of x weeks": {
                    "one": "\u30a4\u30c6\u30ec\u30fc\u30b7\u30e7\u30f3\u306f%{day}\u306b\u30b9\u30bf\u30fc\u30c8\u3057\u3001\u9577\u3055\u306f1\u9031\u9593\u3067\u3059",
                    "other": "\u30a4\u30c6\u30ec\u30fc\u30b7\u30e7\u30f3\u306f%{day}\u306b\u30b9\u30bf\u30fc\u30c8\u3057\u3001\u9577\u3055\u306f%{count}\u9031\u9593\u3067\u3059"
                }
            },
            "show": {
                "done": "\u5b8c\u4e86",
                "in_progress": "\u4f5c\u696d\u4e2d",
                "backlog": "\u672a\u51e6\u7406",
                "icebox": "\u30a2\u30a4\u30b9\u30dc\u30c3\u30af\u30b9"
            }
        },
        "registrations": {
            "edit": {
                "leave_blank_if_you_dont_want_to_change_it": "\u5909\u66f4\u3057\u306a\u3044\u5834\u5408\u306f\u7a7a\u767d\u306b\u3057\u3066\u304f\u3060\u3055\u3044",
                "notify_me_when_my_stories_are": "\u81ea\u5206\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u304c\u4e0b\u8a18\u3060\u3063\u305f\u3089\u77e5\u3089\u305b\u308b",
                "we_need_your_current_password_to_confirm_your_changes": "\u5909\u66f4\u3059\u308b\u306b\u306f\u73fe\u5728\u306e\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5fc5\u8981\u3067\u3059\u3002"
            }
        }
    }
};
