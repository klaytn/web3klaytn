from base.testing import KlaytnBaseTesting


class TestAdminStartStateMigration(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.admin.start_state_migration()
        self.assertResponseSuccess()
