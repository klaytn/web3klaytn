from base.testing import KlaytnBaseTesting


class TestAdminStateMigrationStatus(KlaytnBaseTesting):

    def test_post(self):
        admin_response = self.sdk.admin.state_migration_status()

        self.covert_response(admin_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
